// Step 2: Employee Array

const employees = [
  { name: "Alice", hourlyRate: 25, hoursWorked: 38 },
  { name: "Bob", hourlyRate: 20, hoursWorked: 45 },
  ( name: "Joe", hourlyRate: 22, hoursWorked: 31)
];

// Step 3: Pay for up to 40 hours

function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

// Step 4: Overtime 1.5x over 40 hours

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * (rate * 1.5);
    }
    return 0;
}
