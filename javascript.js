function getComputerChoice() {
    const choice = Math.random();

    if (choice >= 0 && choice <= 0.33)
    {
        return 'Rock'
    }
    else if (choice > 0.33 && choice <= 0.66)
    {
        return 'Paper'
    }
    else
    {
        return 'Scissors'
    }
}