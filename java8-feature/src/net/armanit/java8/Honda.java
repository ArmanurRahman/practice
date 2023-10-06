package net.armanit.java8;

public class Honda implements Vehicle{

    @Override
    public int getSpeed(){
        return  150;
    }

    @Override
    public void applyBreak() {
        System.out.println("Breaks applied");
    }

    public static void sayHello() {
        System.out.println("Say hello from main class car");
    }
    public static void main(String[] args) {
        Honda honda = new Honda();
        honda.applyBreak();
        honda.autoPilot();

        Honda.sayHello();
        Vehicle.sayHello();
    }
}
