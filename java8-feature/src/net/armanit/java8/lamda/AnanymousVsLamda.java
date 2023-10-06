package net.armanit.java8.lamda;

public class AnanymousVsLamda {
    int sum = 0;

    public void sum() {
        int tempSum = 0;
        ArithmeticOperation sumOperation = (a, b) -> {
            int sum = 0;
            this.sum = a + b;
            System.out.println("The value of sum inside lamda " + sum);
            return this.sum;
        };

        System.out.println("the sum of given 2 numbers is: " + sumOperation.calculation(12, 32));
    }

    public static void main(String[] args) {
        AnanymousVsLamda lamda = new AnanymousVsLamda();
        lamda.sum();
    }
}
