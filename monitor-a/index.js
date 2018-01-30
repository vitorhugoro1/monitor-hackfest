const msRestAzure = require('ms-rest-azure');
const monitorManagementClient = require('azure-monitor');
require('dotenv').load();

const subscriptionId = 'cbcaf194-4015-407b-b7fc-556dc9de988a';
const resourceGroupName = '/subscriptions/cbcaf194-4015-407b-b7fc-556dc9de988a/resourceGroups/hackfest';

const clientId = process.env.CLIENT_ID;
const secret = process.env.SECRET_ID;
const domain = process.env.DOMAIN_ID;

msRestAzure
    .loginWithServicePrincipalSecret(clientId, secret, domain)
    .then(credentials => {
        const client = new monitorManagementClient(credentials, subscriptionId);

        client.metrics.list(resourceGroupName, (response) => {
            console.log(response);
        })
    });