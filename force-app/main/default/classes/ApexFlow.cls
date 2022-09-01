public class ApexFlow {
    @InvocableMethod(label='Call Apex' description='Wraps standard Apex method calls for easy access from Flow.')
    public static List<Response> invoke(List<Request> requests) {

        List<Response> responses = new List<Response>();

        for(Request r : requests) {
            Response res = new Response();
            String classAndMethod = r.className.toLowerCase() + '.' + r.methodName.toLowerCase();
            if(classAndMethod == 'math.random') {
                res.decimalValue = Math.random();
            }
            else if(classAndMethod == 'string.split') {
                res.stringValues = r.input.split(r.param1);
            }
            responses.add(res);
        }

        return responses;

    }

    public class Request {
        @InvocableVariable public String className;
        @InvocableVariable public String methodName;
        @InvocableVariable public String input;
        @InvocableVariable public String param1;
        @InvocableVariable public String param2;
        @InvocableVariable public String param3;
        @InvocableVariable public String param4;
        @InvocableVariable public String param5;
    }

    public class Response {
        @InvocableVariable public String stringValue;
        @InvocableVariable public String[] stringValues;
        @InvocableVariable public Decimal decimalValue;
    }

    /*

    abc = A,B,C
    className = String
    methodName = Split
    input = abc
    param1 = ','
    */
}
