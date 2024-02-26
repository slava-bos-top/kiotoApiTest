FROM mcr.microsoft.com/azure-functions/node:4-node18
 
WORKDIR /home/site/wwwroot
 
ENV AzureWebJobsScriptRoot=/home/site/wwwroot \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true \
    AzureWebJobsFeatureFlags=EnableWorkerIndexing \
    FUNCTIONS_WORKER_RUNTIME=node

COPY . /home/site/wwwroot

RUN npm ci && \
    npm run clean && \
    npm run build