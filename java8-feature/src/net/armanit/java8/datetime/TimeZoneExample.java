package net.armanit.java8.datetime;

import java.time.*;
import java.time.chrono.HijrahDate;

public class TimeZoneExample {
    public static void main(String[] args) {
        ZoneId tokyo = ZoneId.of("Asia/Tokyo");
        ZonedDateTime tokyoDateTime = ZonedDateTime.now(tokyo);
        System.out.println("Time in Tokyo is: " + tokyoDateTime);

        ZoneOffset zoneOffsetDhaka = ZoneOffset.of("+06:00");
        OffsetDateTime offsetDateTime = OffsetDateTime.now(zoneOffsetDhaka);
        System.out.println("Time in Dhaka is: " + offsetDateTime);

        OffsetDateTime targetOffsetDateTime = offsetDateTime.withOffsetSameInstant(ZoneOffset.of("+01:00"));
        System.out.println("Time in Paris now using offset : " + targetOffsetDateTime);

        ZonedDateTime dateTime1 = ZonedDateTime.now(ZoneId.of("America/New_York"));
        OffsetDateTime dateTime2 = OffsetDateTime.now(ZoneOffset.of("-05:00"));
        System.out.println(dateTime1);
        System.out.println(dateTime2);
        System.out.println(dateTime2.toEpochSecond() - dateTime1.toEpochSecond());

        ZonedDateTime dateTimePlus1 = dateTime1.plusMonths(6);
        OffsetDateTime dateTimePlus2 = dateTime2.plusMonths(6);
        System.out.println(dateTimePlus1);
        System.out.println(dateTimePlus2);
        System.out.println(dateTimePlus2.toEpochSecond() - dateTimePlus1.toEpochSecond());

        LocalDateTime ldt = LocalDateTime.of(2000, 6, 16, 12, 30, 0);
        ZonedDateTime parisDateTime = ldt.atZone(ZoneId.of("Europe/Paris"));
        System.out.println("Depart : " + parisDateTime);

        ZoneOffset asiaKolkata = ZoneOffset.of("+05:30");
        LocalDateTime dateTime = LocalDateTime.of(2014, Month.MARCH, 18, 13, 45);
        OffsetDateTime dateTimeInKolkata = OffsetDateTime.of(dateTime, asiaKolkata);
        System.out.println("Given time in Kolkata : " + dateTimeInKolkata);

        HijrahDate todayIslamic = HijrahDate.now();
        System.out.println("Islamic date for today : " + todayIslamic);

    }
}
