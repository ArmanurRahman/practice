package net.armanit.java8;

import java.util.function.Function;
import java.util.function.UnaryOperator;

public class UnaryOperatorFunction {
    public static void main(String[] args) {
        Function<String, String> convertString = i -> i.toUpperCase();
        System.out.println("The uppercase of given input value is: " + convertString.apply("arman"));

        // unary operator when input and output are same type
        UnaryOperator<String> convertStrWithUnary = i -> i.toUpperCase();
        System.out.println("The uppercase value of given input with Unary operator is : " + convertStrWithUnary.apply("mubeen"));

        UnaryOperator<String> sameValue = UnaryOperator.identity();
        System.out.println("The value of given input is: " + sameValue.apply("Arman"));

        Function<Integer, Integer> multiplyOperation = i -> i * 2;
        UnaryOperator<Integer> tripleOperation = i -> i * 3;

        multiplyOperation = multiplyOperation.andThen(tripleOperation);
        System.out.println(multiplyOperation.apply(5));

        multiplyOperation = multiplyOperation.compose(tripleOperation);
        System.out.println(multiplyOperation.apply(5));
    }
}
