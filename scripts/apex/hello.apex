// data cleanout...
//delete [select Id from Property__c];

Map<Integer, Integer> randomCounts = new Map<Integer, Integer>();
randomCounts.put(1, 0);
randomCounts.put(2, 0);
randomCounts.put(3, 0);
randomCounts.put(4, 0);
randomCounts.put(5, 0);
randomCounts.put(6, 0);

Integer min = 1;
Integer max = 6;

Integer x = 0;

Decimal random = Math.random();

for(Integer x = min, x < max; x++) {
    if(random <= x / max) return x;
}



do {

    Decimal random = Math.random() * max + 1;
    Integer val = Integer.valueOf(random.round(System.RoundingMode.HALF_DOWN));
    if(val >= min && val <= max) {
        randomCounts.put(val, randomCounts.get(val) + 1);
        x++;
    }

} while (x < 10000);

system.debug(randomCounts);
