# Monday-Webhook App

## Resolve the Challenge, Proxy the Webhook

This app serves as a tiny web proxy to monday in order to configure a URL that can both resolve the monday.com webhook challenge AND forward it to a location of your choice.

## Install

_To Run on Kubernetes:_

1. Download the helm `chart` from the root of the repository.
2. Populate the `values.yaml` according to your configuration. Configure the mandatory `WEBHOOK_URL` environment variable for the app.
3. Run `helm install .` and wait until all components are healthy.

## Testing

curl -X POST https://monday-trigger.explorium.ninja/webhook

## Features

* Define [Parameterized](fundamentals/parameters/) [Blocks](fundamentals/projects.md) of code in any language to be run in Docker.
* Define Static and [Dynamic](fundamentals/parameters/dynamic.md) [parameters](fundamentals/parameters/) to be used by all Blocks.
* Create [Instances](fundamentals/instances/) of code that can be run individually.
* Create [Steps](fundamentals/flows/step-flows.md) and [DAG](fundamentals/flows/dag-flows.md) [Flows](fundamentals/flows/) using Instances of code.
* Save [Artifacts](fundamentals/instances/artifacts.md) and Outputs, managed by Minio S3.
* [Schedule](fundamentals/scheduler.md) any component and view it in a timeline.
* Connect a [Github](configuration/settings/github/) repository with or without a Webhook, automatically update all the code in the server.
* Manage a friendly [Developer Portal](use-cases/user-portal.md), give your jobs custom names and folders.
* Can be run on [Docker or on Kubernetes](guides/creating-your-first-project.md)