import java.util.*;
public  class lambda {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        numbers.sort((a, b) -> a.compareTo(b));
        System.out.println(numbers);
    }
    
}
