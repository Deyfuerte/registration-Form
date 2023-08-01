import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter first number:");
        double num1 = scanner.nextDouble();

        System.out.println("Enter second number:");
        double num2 = scanner.nextDouble();

        System.out.println("Enter an operator (+, -, *, /):");
        char operator = scanner.next().charAt(0);

        scanner.close();
        double output;

        switch (operator) {
            case '+':
                output = num1 + num2;
                break;

            case '-':
                output = num1 - num2;
                break;

            case '*':
                output = num1 * num2;
                break;

            case '/':
                output = num1 / num2;
                break;

            // operator doesn't match any case constant (+, -, *, /)
            default:
                System.out.println("Error! Invalid operator. Please enter correct operator.");
                return;
        }

        System.out.println(num1 + " " + operator + " " + num2 + ": " + output);
    }
}