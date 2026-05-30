import java.util.Scanner;
public class factorialCalculation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a non negative number: ");
        int num = sc.nextInt();
        if(num==0){
            System.out.println("Factorial of 0 is: 1");
            return;
        }
        int factorial = 1;
        for (int i = 1; i <= num; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + num + " is: " + factorial);
    }
}
