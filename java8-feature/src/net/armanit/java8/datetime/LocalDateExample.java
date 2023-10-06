package net.armanit.java8.datetime;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Month;
import java.time.temporal.ChronoField;

public class LocalDateExample {
    public static void main(String[] args) {
        LocalDate date = LocalDate.of(1994, 12, 4);
        System.out.println("Given date is:" + date);
        int year = date.getYear();
        System.out.println("Given year is: " + year);

        Month month = date.getMonth();
        System.out.println("Given month is: " + month);

        int day = date.getDayOfMonth();
        System.out.println("Given day is: " + day);

        DayOfWeek dow = date.getDayOfWeek();
        System.out.println("Given day of week: " + dow);

        int len = date.lengthOfMonth();
        System.out.println("Given length of month is: " + len);

        boolean leap = date.isLeapYear();
        System.out.println("Is a leap year: " + leap);

        int year1 = date.get(ChronoField.YEAR);
        System.out.println("Given year is: " + year1);

        int month1 = date.get(ChronoField.MONTH_OF_YEAR);
        System.out.println("Given month is: " + month1);

        int day1 = date.get(ChronoField.DAY_OF_MONTH);
        System.out.println("Given day is: " + day1);

        LocalDate parseDate = LocalDate.parse("2014-06-21");
        System.out.println("Parse Date is: " + parseDate);

        LocalDate today = LocalDate.now();
        System.out.println("Today is: " + today);
    }
}
