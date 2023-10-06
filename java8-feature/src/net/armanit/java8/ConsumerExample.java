package net.armanit.java8;

import java.util.function.Consumer;

public class ConsumerExample {
    public static void main(String[] args) {
        Consumer<String> convertAndDisplay = input -> System.out.println("Converted value is: " + input.toUpperCase());
        convertAndDisplay.accept("mubeen");

        Consumer<String> appendInput = input -> System.out.println("New value after appending: Hello " + input);
        appendInput.andThen(convertAndDisplay).accept("Java 8");
    }
}
