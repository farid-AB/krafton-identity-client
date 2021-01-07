#!/usr/bin/env ts-node

import { createIdentity } from '../identity.twirp';
import { pubg } from "../identity.pb";

async function queryForAccount() {
	const idSvc = createIdentity("http://localhost:8080");
	let query = pubg.globalaccounts.CriteriaQuery.create({
		CriteriaType: "guid",
		Criteria: "0d1bb1b2-13ec-4403-a70d-96acd880a464",
	});
	return await idSvc.getGlobalAccount(query);
}

queryForAccount().then((acct: pubg.globalaccounts.GlobalAccount) => {
	console.log(acct)
}).catch((e) => {
	console.log(`ASYNC ERROR:`);
	console.log(e);
});
