public class Inheritance {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.makeSound();
        d.eat();
    }
}
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
    void makeSound() {
        System.out.println("This animal is making Sound.");
    }
}
class Dog extends Animal {
    void makeSound() {
        System.out.println("This dog barks.");
    }
}
