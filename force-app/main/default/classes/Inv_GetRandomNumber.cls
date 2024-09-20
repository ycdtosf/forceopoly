public class Inv_GetRandomNumber {
    
    @InvocableMethod
    public static List<Decimal> invoke(List<Request> requests) {

        List<Decimal> responses = new List<Decimal>();

        for(Request r : requests) {
            responses.add(generate(r.min, r.max));
        }

        return responses;

    }
    
    public static Decimal generate(Decimal min, Decimal max) {
        
        // setting otherwise null values
        if(min == null) min = 0;
        if(max == null) max = 1;
       
        // swwap min and max if min > max
        if (min > max) {
            Decimal tempMax = min;
            max = min;
            min = tempMax;
        }

        return min +  Math.random() * (max - min);

    }

    public class Request {
        @InvocableVariable
        public Decimal min;
        @InvocableVariable
        public Decimal max;
    }

}