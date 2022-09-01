public with sharing class lwcBoard {
    @AuraEnabled
    public static List<GameProperty__c> loadGameProperties(Id gameId) {
        return [select 
            Id, 
            Property__r.Id,
            Property__r.Name, 
            Property__r.Color__c, 
            Property__r.BuildingCost__c, 
            Property__r.Position__c,
            Property__r.PropertyCost__c,
            Property__r.Rent__c,
            Property__r.RentHotel__c,
            Property__r.RentHouse1__c, 
            Property__r.RentHouse2__c,
            Property__r.RentHouse3__c,
            Property__r.RentHouse4__c,
            Property__r.Type__c,
            Property__r.RecordTypeId,
            Property__r.RecordType.Name
            from GameProperty__c 
            where Game__c = :gameId
            order by Property__r.Position__c asc
        ];
    }
    
}
