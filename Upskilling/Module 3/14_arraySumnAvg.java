import java.util.Scanner;
public class arraySumnAvg {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = sc.nextInt();
        int[] elements = new int[size];
        int sum = 0;
        for(int i=0; i<size; i++){
            System.out.print("Enter element " + (i+1) + ": ");
            int element = sc.nextInt();
            elements[i] = element;
            sum= sum+element;
        }
        System.out.println("Sum of the array is: " + sum);
        double average = (double) sum / size;
        System.out.println("Average of the array is: " + average);

    }
}
