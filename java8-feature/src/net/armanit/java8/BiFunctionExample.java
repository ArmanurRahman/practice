package net.armanit.java8;

import java.util.function.BiConsumer;
import java.util.function.BiFunction;
import java.util.function.BiPredicate;

public class BiFunctionExample {
    public static void main(String[] args) {
        BiPredicate<Integer, Integer> isEven = (a, b) -> (a + b) % 2 == 0;
        System.out.println("Is the sum of the given value is even? " + isEven.test(4, 9));

        BiFunction<Integer, Integer, Double> power = (a1, a2) -> Math.pow(a1, a2);
        System.out.println("The power of given numbers is : " + power.apply(4, 9));

        BiConsumer<String, String> appendAndConvert = (word1, word2) -> System.out.println("Converted value is: " + (word1 + word2).toUpperCase());
        appendAndConvert.accept("Hello", "Arman");

    }
}
