import java.util.Random;
import java.util.Scanner;
public class NumberGuessingGame {
    public static void main(String[] args){
        Random r = new Random();
        int nobycomp = r.nextInt(100);
        Scanner sc = new Scanner(System.in);
        int nobyuser = sc.nextInt();
        while(nobyuser != nobycomp){
            if(nobyuser < nobycomp){
                System.out.println("Too low! Try again.");
            } else {
                System.out.println("Too high! Try again.");
            }
            nobyuser = sc.nextInt();
        }
        System.out.println("Congratulations! You've guessed the number.");
    }
}
