const numbers = [1, 3, 16, 22,  9, 11, 13, 77, 89, 4, 5, 90, 15];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
        continue;
    }

    console.log(`Число більше ніж ${threshold}: ${numbers[i]}`);
}
