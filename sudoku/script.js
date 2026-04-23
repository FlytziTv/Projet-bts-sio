// ========================================
// PARTIE 1 : VARIABLES GLOBALES
// ========================================

// Grille de solution complète (9x9)
let solution = [];

// Grille de jeu que l'utilisateur voit (avec cases vides)
let gameGrid = [];

// Difficulté sélectionnée
let currentDifficulty = "facile";

// Nombre de cases à retirer selon la difficulté
const difficultyLevels = {
  facile: 30, // Retire 30 cases
  moyenne: 40, // Retire 40 cases
  difficile: 50, // Retire 50 cases
  experte: 60, // Retire 60 cases
};

// Cellule actuellement sélectionnée
let selectedCell = null;

// ========================================
// PARTIE 2 : GÉNÉRATION DU SUDOKU
// ========================================

/**
 * Vérifie si un nombre peut être placé à une position donnée
 * @param {Array} grid - La grille à vérifier
 * @param {number} row - Ligne (0-8)
 * @param {number} col - Colonne (0-8)
 * @param {number} num - Nombre à placer (1-9)
 * @returns {boolean} - true si le nombre peut être placé
 */
function isValid(grid, row, col, num) {
  // Vérifier la ligne
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num) return false;
  }

  // Vérifier la colonne
  for (let x = 0; x < 9; x++) {
    if (grid[x][col] === num) return false;
  }

  // Vérifier le bloc 3x3
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[startRow + i][startCol + j] === num) return false;
    }
  }

  return true;
}

/**
 * Remplit la grille de sudoku de manière récursive (backtracking)
 * @param {Array} grid - La grille à remplir
 * @returns {boolean} - true si la grille a été remplie avec succès
 */
function fillGrid(grid) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        // Essayer les chiffres de 1 à 9 dans un ordre aléatoire
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(
          () => Math.random() - 0.5
        );

        for (let num of numbers) {
          if (isValid(grid, row, col, num)) {
            grid[row][col] = num;

            if (fillGrid(grid)) {
              return true;
            }

            grid[row][col] = 0; // Backtrack
          }
        }

        return false;
      }
    }
  }
  return true;
}

/**
 * Crée une nouvelle grille vide (remplie de 0)
 * @returns {Array} - Grille 9x9 vide
 */
function createEmptyGrid() {
  return Array(9)
    .fill(null)
    .map(() => Array(9).fill(0));
}

/**
 * Copie une grille
 * @param {Array} grid - Grille à copier
 * @returns {Array} - Copie de la grille
 */
function copyGrid(grid) {
  return grid.map((row) => [...row]);
}

/**
 * Génère une nouvelle grille de sudoku complète
 * @returns {Array} - Grille 9x9 résolue
 */
function generateSudoku() {
  const grid = createEmptyGrid();
  fillGrid(grid);
  return grid;
}

/**
 * Retire des nombres de la grille selon la difficulté
 * @param {Array} fullGrid - Grille complète
 * @param {number} cellsToRemove - Nombre de cases à vider
 * @returns {Array} - Grille de jeu avec cases vides
 */
function removeCells(fullGrid, cellsToRemove) {
  const grid = copyGrid(fullGrid);
  let removed = 0;

  while (removed < cellsToRemove) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);

    if (grid[row][col] !== 0) {
      grid[row][col] = 0;
      removed++;
    }
  }

  return grid;
}

// ========================================
// PARTIE 3 : INTERFACE UTILISATEUR
// ========================================

/**
 * Affiche la grille dans le HTML
 */
function displayGrid() {
  const blocks = document.querySelectorAll(".block");

  for (let blockIndex = 0; blockIndex < 9; blockIndex++) {
    const block = blocks[blockIndex];
    const cells = block.querySelectorAll(".cell");

    // Calculer la position de départ du bloc dans la grille
    const blockRow = Math.floor(blockIndex / 3) * 3;
    const blockCol = (blockIndex % 3) * 3;

    for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
      const cell = cells[cellIndex];
      const cellRow = blockRow + Math.floor(cellIndex / 3);
      const cellCol = blockCol + (cellIndex % 3);

      const value = gameGrid[cellRow][cellCol];

      // Afficher le nombre ou vider la cellule
      if (value !== 0) {
        cell.textContent = value;
        cell.classList.add("fixed"); // Marquer comme fixe (non modifiable)
        cell.style.fontWeight = "bold";
        cell.style.fontSize = "24px";
      } else {
        cell.textContent = "";
        cell.classList.remove("fixed");
        cell.style.fontWeight = "normal";
      }

      // Retirer les classes d'erreur et d'indice
      cell.classList.remove("error-cell", "hint-cell");

      // Stocker les coordonnées dans le dataset
      cell.dataset.row = cellRow;
      cell.dataset.col = cellCol;
    }
  }
}

/**
 * Gère le clic sur une cellule
 * @param {Event} e - Événement de clic
 */
function handleCellClick(e) {
  const cell = e.target;

  // Ne pas permettre de sélectionner les cellules fixes
  if (cell.classList.contains("fixed")) return;

  // Désélectionner la cellule précédente
  if (selectedCell) {
    selectedCell.style.backgroundColor = "";
  }

  // Sélectionner la nouvelle cellule
  selectedCell = cell;
  selectedCell.style.backgroundColor = "#ffd5ea";
}

/**
 * Gère l'entrée au clavier
 * @param {Event} e - Événement clavier
 */
function handleKeyPress(e) {
  if (!selectedCell || selectedCell.classList.contains("fixed")) return;

  const key = e.key;

  // Si c'est un chiffre de 1 à 9
  if (key >= "1" && key <= "9") {
    const row = parseInt(selectedCell.dataset.row);
    const col = parseInt(selectedCell.dataset.col);
    const num = parseInt(key);

    // Mettre à jour la grille
    gameGrid[row][col] = num;
    selectedCell.textContent = num;
    selectedCell.style.fontSize = "24px";

    // Vérifier si le nombre est correct
    if (num === solution[row][col]) {
      selectedCell.classList.remove("error-cell");
    }

    // Vérifier si le sudoku est terminé
    if (isSudokuComplete()) {
      setTimeout(() => {
        alert("🎉 Félicitations ! Vous avez résolu le Sudoku !");
      }, 100);
    }
  }

  // Si c'est Backspace ou Delete, effacer la cellule
  if (key === "Backspace" || key === "Delete") {
    const row = parseInt(selectedCell.dataset.row);
    const col = parseInt(selectedCell.dataset.col);

    gameGrid[row][col] = 0;
    selectedCell.textContent = "";
    selectedCell.classList.remove("error-cell");
  }
}

/**
 * Vérifie si le sudoku est complètement résolu
 * @returns {boolean} - true si toutes les cases sont correctes
 */
function isSudokuComplete() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (gameGrid[row][col] !== solution[row][col]) {
        return false;
      }
    }
  }
  return true;
}

// ========================================
// PARTIE 4 : FONCTIONS DES BOUTONS
// ========================================

/**
 * Démarre une nouvelle partie
 */
function newGame() {
  // Générer une nouvelle grille complète
  solution = generateSudoku();

  // Créer la grille de jeu en retirant des cases
  const cellsToRemove = difficultyLevels[currentDifficulty];
  gameGrid = removeCells(solution, cellsToRemove);

  // Afficher la grille
  displayGrid();

  // Réinitialiser la sélection
  selectedCell = null;
}

/**
 * Donne un indice à l'utilisateur
 */
function giveHint() {
  // Trouver une case vide
  const emptyCells = [];

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (gameGrid[row][col] === 0) {
        emptyCells.push({ row, col });
      }
    }
  }

  if (emptyCells.length === 0) {
    alert("Il n'y a plus de cases vides !");
    return;
  }

  // Choisir une case aléatoire
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const { row, col } = randomCell;

  // Remplir la case avec la solution
  gameGrid[row][col] = solution[row][col];

  // Afficher et mettre en surbrillance
  displayGrid();

  // Trouver la cellule HTML correspondante
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    const cells = block.querySelectorAll(".cell");
    cells.forEach((cell) => {
      if (
        parseInt(cell.dataset.row) === row &&
        parseInt(cell.dataset.col) === col
      ) {
        cell.classList.add("hint-cell");
      }
    });
  });
}

/**
 * Résout automatiquement le sudoku
 */
function solveSudoku() {
  gameGrid = copyGrid(solution);
  displayGrid();
  alert("Sudoku résolu !");
}

/**
 * Vérifie les erreurs dans la grille
 */
function checkErrors() {
  let errorsFound = 0;

  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    const cells = block.querySelectorAll(".cell");
    cells.forEach((cell) => {
      if (cell.classList.contains("fixed")) return;

      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      const value = gameGrid[row][col];

      if (value !== 0 && value !== solution[row][col]) {
        cell.classList.add("error-cell");
        errorsFound++;
      } else {
        cell.classList.remove("error-cell");
      }
    });
  });

  if (errorsFound === 0) {
    alert("✅ Aucune erreur trouvée ! Continue comme ça !");
  } else {
    alert(`❌ ${errorsFound} erreur(s) trouvée(s) !`);
  }
}

/**
 * Importe une grille depuis un format texte
 */
function importGrid() {
  const input = prompt(
    "Entrez votre grille Sudoku (81 chiffres, 0 pour les cases vides) :"
  );

  if (!input || input.length !== 81) {
    alert("Format invalide ! Entrez exactement 81 chiffres.");
    return;
  }

  const newGrid = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const value = parseInt(input[i * 9 + j]);
      row.push(isNaN(value) ? 0 : value);
    }
    newGrid.push(row);
  }

  gameGrid = newGrid;
  solution = copyGrid(newGrid); // Pour l'import, on considère que c'est la solution
  displayGrid();
}

/**
 * Réinitialise la grille à son état initial
 */
function resetGrid() {
  // Remettre toutes les cases non-fixes à 0
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    const cells = block.querySelectorAll(".cell");
    cells.forEach((cell) => {
      if (!cell.classList.contains("fixed")) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        gameGrid[row][col] = 0;
      }
    });
  });

  displayGrid();
}

// ========================================
// PARTIE 5 : INITIALISATION
// ========================================

/**
 * Initialise le jeu au chargement de la page
 */
function init() {
  // Ajouter les écouteurs d'événements aux cellules
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  // Ajouter l'écouteur pour le clavier
  document.addEventListener("keydown", handleKeyPress);

  // Ajouter les écouteurs pour les boutons
  document.getElementById("btn-new-game").addEventListener("click", newGame);
  document.getElementById("btn-hint").addEventListener("click", giveHint);
  document.getElementById("btn-solve").addEventListener("click", solveSudoku);
  document.getElementById("btn-check").addEventListener("click", checkErrors);
  document.getElementById("btn-import").addEventListener("click", importGrid);
  document.querySelector(".btn-reset").addEventListener("click", resetGrid);

  // Ajouter les écouteurs pour la difficulté
  const difficultyRadios = document.querySelectorAll(
    'input[name="difficulty"]'
  );
  difficultyRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      currentDifficulty = e.target.value;
    });
  });

  // Sélectionner "facile" par défaut
  document.getElementById("contactChoice1").checked = true;

  // Générer la première grille
  newGame();
}

// Démarrer le jeu quand la page est chargée
document.addEventListener("DOMContentLoaded", init);
