import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class SurreyOpen511 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'surrey-open511',
		name: 'N8nDevSurreyOpen511',
		icon: { light: 'file:./surrey-open511.png', dark: 'file:./surrey-open511.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'This API provides real time traffic obstruction events occuring within the City of Surrey',
		defaults: { name: 'surrey-open511' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevSurreyOpen511Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
