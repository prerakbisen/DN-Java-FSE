public class class_Object {
    public static void main(String[] args) {
        car myCar = new car("Tata", "Curve", 2026);
        myCar.displaydetails();
    }
}
class car{
    String make;
    String model;
    int year;
    public car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    public void displaydetails(){
        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Car Year: " + year);
    }
}
