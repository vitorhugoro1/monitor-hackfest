Exemplo

```
msRestAzure
    .loginWithServicePrincipalSecret(clientId, secret, domain)
    .then(credentials => {

        var client = new monitorManagementClient(credentials, subscriptionId);

        client.metricDefinitions.list(resourceUri).then((r)=>{
            console.log(JSON.stringify(r));
            console.log('')
        })
        
        var timespan = '2018-01-30T02:20:00Z/2018-02-01T04:20:00Z';
        var interval = moment.duration('PT12H');
        var filter = "StatusCode eq '*'";
        var options = { 
            timespan, 
            filter,
            interval,
             metric: 'TotalRequests',
             //resultType: 'Metadata'
            };

        client.metrics.list(resourceUri, options).then( (r,a,b) =>{
            console.log(JSON.stringify(r));
        })
    });
    
```