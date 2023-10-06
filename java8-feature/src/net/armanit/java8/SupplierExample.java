package net.armanit.java8;

import java.time.LocalDate;
import java.util.function.Supplier;

public class SupplierExample {
    public static void main(String[] args) {
        Supplier<Integer> getCurrentDayOfMonth = () -> LocalDate.now().getDayOfMonth();

        System.out.println("Today's day of the month is: " + getCurrentDayOfMonth.get());

        Supplier<String> getCurrentDay = () -> LocalDate.now().getDayOfWeek().name();
        System.out.println("Today is: " + getCurrentDay.get());
    }
}
