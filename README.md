# Monday-Webhook App

## Resolve the Challenge, Proxy the Webhook

This app serves as a tiny web proxy to monday in order to configure a URL that can both resolve the monday.com webhook challenge _and_ forward it to a location of your choice.

## Install

_Build the Image:_

1. Run `docker image build .` from the root of the repository.
   
_To Run on Kubernetes:_

1. Download the helm `chart` from the root of the repository.
2. Populate the `values.yaml` according to your configuration. Configure the mandatory `WEBHOOK_URL` environment variable for the app.
3. Run `helm install` and wait until all components are healthy.

## Quick Usage

```
curl -X POST http://my-webhook-app/webhook -H "Content-Type: application/json" -d '{"data": "test"}'
```

## monday.com

Configure a webhook for your board using the guide [here](https://support.monday.com/hc/en-us/articles/360003540679-Webhook-Integration-).