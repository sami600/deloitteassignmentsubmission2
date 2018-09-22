({
   openModel: function(component, event, helper) {
      component.set("v.isOpen", true);
   },
 
   crossModel: function(component, event, helper) {   
      component.set("v.PostActionMessage", ""); 
      component.set("v.isOpen", false);
   },
   
   closeModel: function(component, event, helper) {
      component.set("v.PostActionMessage", "You clicked the 'Cancel' button."); 
      component.set("v.isOpen", false);
   },
 
   likenClose: function(component, event, helper) {
      component.set("v.PostActionMessage", "You clicked the 'Confirm' button.");
      component.set("v.isOpen", false);
   },
})