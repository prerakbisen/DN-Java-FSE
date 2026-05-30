public class methodOverLoading {
    public static void main(String[] args) {
        System.out.println(add(5, 10));
        System.out.println(add(3.5, 4.5));
        System.out.println(add(1, 2, 3));
    }
    public static int add(int a, int b){
        return a + b;
    }
    public static double add(double a, double b){
        return a + b;
    }
    public static int add(int a, int b , int c){
        return a + b + c;
    }
}
