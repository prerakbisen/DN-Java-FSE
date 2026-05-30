import java.util.Scanner;
public class gradeCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks obtained: ");
        int marks = sc.nextInt();
        char grade;
        if (marks >= 90) {
            grade = 'A';
        } else if (marks >= 80 && marks < 89) {
            grade = 'B';
        } else if (marks >= 70 && marks < 79) {
            grade = 'C';
        } else if (marks >= 60 && marks < 69) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        System.out.println("Grade: " + grade);
    }
}
