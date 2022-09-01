public with sharing class lwcProperty {
    
    @AuraEnabled
    public static Property__c getPropertyById(Id recordId) {
        return [select 
            Id, 
            Name, 
            Color__c, 
            BuildingCost__c, 
            Position__c,
            PropertyCost__c,
            Rent__c,
            RentHotel__c,
            RentHouse1__c, 
            RentHouse2__c,
            RentHouse3__c,
            RentHouse4__c,
            Type__c,
            RecordTypeId,
            RecordType.Name
            from Property__c where Id = :recordId limit 1];
    }

}
