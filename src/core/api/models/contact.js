/**
 * @class INContact
 * @constructor
 * @augments INModelObject
 *
 * @description
 * Represents a contact.
 */
function INContact(inbox, id, namespaceId) {
  INModelObject.call(this, inbox, id, namespaceId);
}

inherits(INContact, INModelObject);


/**
 * @function
 * @name INContact#resourcePath
 *
 * @description
 * If the message is synced, the path is <baseURL>/n/<namespaceID>/messages/<messageID>.
 *
 * There's no real meaning for resourcePaths to unsynced messages, because unsynced messages should
 * not exist. TODO(@caitp): do not return a path for unsynced messages, return null.
 *
 * @returns {string} the resource path of the message.
 */
INContact.prototype.resourcePath = function() {
  if (!this.isUnsynced()) {
    return formatUrl('%@/contacts/%@', this.namespaceUrl(), this.id);
  }
  return formatUrl('%@/contacts', this.namespaceUrl());
};

/**
 * @property
 * @name INContact#email
 *
 * The email for the contact.
 */


/**
 * @property
 * @name INContact#name
 *
 * The name of the contact.
 */

/**
 * @property
 * @name INMessage#object
 *
 * The resource type, always 'message'.
 */
defineResourceMapping(INContact, {
  'name': 'name',
  'email': 'email'
});