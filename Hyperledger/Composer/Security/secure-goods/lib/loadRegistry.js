/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// Ignore the specified global functions (or the code won't lint)
/* global getParticipantRegistry getAssetRegistry getFactory emit */

// Namespaces
const NSBase = 'com.makotogo.learn.composer.securegoods';
const NSAsset = NSBase + '.asset';
const NSParticipant = NSBase + '.participant';

/**
 * Load the Asset and Participant registries with data
 *
 * @param {com.makotogo.learn.composer.securegoods.transaction.LoadRegistries} tx - the transaction object
 * @transaction
 */
async function loadRegistries(tx) {
    //
    // Participants
    await loadParticipantRegistries();
    //
    // Assets
    await loadAssetRegistries();
}

/**
 * Load the Participant registries
 */
async function loadParticipantRegistries() {
    //
    // Create sellers
    await createSellers();
    //
    // Create Buyers
    await createBuyers();
    //
    // Create Shippers
    await createShippers();
    //
    // Create Auditors
    await createAuditors();
}

/**
 * Load the Asset registries
 */
async function loadAssetRegistries() {
    //
    // Items
    await createItems();
    //
    // Orders
    // await createOrders();
}

/**
 * Create Sellers and add them to the Participant registry
 */
async function createSellers() {
    //
    // Get a reference to the Sellers in the participant registry
    const sellerRegistry = await getParticipantRegistry(NSParticipant + '.Seller');
    //
    // Create new Seller instances
    let sellers = [];
    const factory = getFactory();
    let seller = factory.newResource(NSParticipant, 'Seller', 'SELL001');
    seller.name = 'Selljestic';
    sellers.push(seller);
    //
    seller = factory.newResource(NSParticipant, 'Seller', 'SELL002');
    seller.name = 'Selltabulous';
    sellers.push(seller);
    //
    // Add the new Seller instances to the registry
    await sellerRegistry.addAll(sellers);
}

/**
 * Create Buyers and add them to the Participant registry
 */
async function createBuyers() {
    //
    // Get a reference to the Buyers in the participant registry
    const buyerRegistry = await getParticipantRegistry(NSParticipant + '.Buyer');
    //
    // Create new Buyer instances
    let buyers = [];
    const factory = getFactory();
    let buyer = factory.newResource(NSParticipant, 'Buyer', 'BUY001');
    buyer.name = 'Buytastic';
    buyers.push(buyer);
    //
    buyer = factory.newResource(NSParticipant, 'Buyer', 'BUY002');
    buyer.name = 'Buycorp';
    buyers.push(buyer);
    //
    // Add the new Buyer instances to the registry
    await buyerRegistry.addAll(buyers);
}

/**
 * Create Shippers and add them to the Participant registry
 */
async function createShippers() {
    //
    // Get a reference to the Shippers in the participant registry
    const shipperRegistry = await getParticipantRegistry(NSParticipant + '.Shipper');
    //
    // Create new Buyer instances
    let shippers = [];
    const factory = getFactory();
    let shipper = factory.newResource(NSParticipant, 'Shipper', 'SHIP001');
    shipper.name = 'Shipmagic';
    shippers.push(shipper);
    //
    shipper = factory.newResource(NSParticipant, 'Shipper', 'SHIP002');
    shipper.name = 'Shipinc';
    shippers.push(shipper);
    //
    // Add the new Buyer instances to the registry
    await shipperRegistry.addAll(shippers);
}

/**
 * Create Auditors and add them to the Participant registry
 */
async function createAuditors() {
    //
    // Get a reference to the Auditors in the participant registry
    const auditorRegistry = await getParticipantRegistry(NSParticipant + '.Auditor');
    //
    // Create new Auditor instances
    let auditors = [];
    const factory = getFactory();
    let auditor = factory.newResource(NSParticipant, 'Auditor', 'AUD001');
    auditor.name = 'AuditsRUs';
    auditors.push(auditor);
    //
    // Add the new Auditor instances to the registry
    await auditorRegistry.addAll(auditors);
}

/**
 * Create Items and add them to the Asset registry
 */
async function createItems() {
    //
    // Get a reference to the Items in the participant registry
    const itemRegistry = await getAssetRegistry(NSAsset + '.Item');
    //
    // Create new Item instanes
    let items = [];
    const factory = getFactory();
    for (let aa = 1; aa <= 5; aa++) {
        let item = factory.newResource(NSAsset, 'Item', 'WIDGET00' + aa);
        item.sku = 'W00' + aa;
        item.description = 'Widget number ' + aa;
        items.push(item);
    }
    //
    // Add the new Item instances to the registry
    await itemRegistry.addAll(items);
}