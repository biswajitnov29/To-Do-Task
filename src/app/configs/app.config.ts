export class AppConfig{
    
    
    public static googleTask:any={
        
        client_id: '778996693929-39icdut6us06ap2lpu544nhab6iue03n.apps.googleusercontent.com',
        scope : [     
        // Manage your tasks
        'https://www.googleapis.com/auth/tasks',
    
        // View your tasks
        'https://www.googleapis.com/auth/tasks.readonly'
        ],
        DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"],
        SCOPES: 'https://www.googleapis.com',
        immediate : true
        
    };
    
    
}