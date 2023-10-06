package net.armanit.java8;

import java.util.function.BinaryOperator;

public class BinaryOperatorExample {
    public static void main(String[] args) {
        // same two input type and same return type
        BinaryOperator<String> appendAndReturn = (word1, word2) -> (word1 + word2).toUpperCase();

        System.out.println(appendAndReturn.apply("Hello", "Arman"));

        BinaryOperator<Integer> maxOperator = BinaryOperator.maxBy((a, b) -> (a > b) ? 1 : ((a == b) ? 0 : -1));
        System.out.println("The largest number is: "+maxOperator.apply(16, 30));

        BinaryOperator<Integer> minOperation = BinaryOperator.minBy((a, b) -> (a > b) ? 1 : ((a == b) ? 0 : -1));
        System.out.println("The smallest number is: "+minOperation.apply(16, 30));
    }
}
