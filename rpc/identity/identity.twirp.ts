// Generated by protoc-gen-twirp_typescript. DO NOT EDIT
import {pubg} from './identity.pb';
import {createTwirpAdapter} from 'pbjs-twirp';
import Axios from 'axios';

const getServiceMethodName = (fn: any): string => {
	if (fn === pubg.globalaccounts.Identity.prototype.createGlobalAccount) {
		return 'CreateGlobalAccount';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.deleteGlobalAccount) {
		return 'DeleteGlobalAccount';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.getGlobalAccount) {
		return 'GetGlobalAccount';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.activateGlobalAccount) {
		return 'ActivateGlobalAccount';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.resendActivation) {
		return 'ResendActivation';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.beginEmailChange) {
		return 'BeginEmailChange';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.completeEmailChange) {
		return 'CompleteEmailChange';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.updateUsername) {
		return 'UpdateUsername';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.updatePassword) {
		return 'UpdatePassword';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.beginForgotPassword) {
		return 'BeginForgotPassword';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.completeForgotPassword) {
		return 'CompleteForgotPassword';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.setCommPrefs) {
		return 'SetCommPrefs';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.setPersona) {
		return 'SetPersona';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.linkYoutube) {
		return 'LinkYoutube';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.linkLitePC) {
		return 'LinkLitePC';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.createRelyingPartyLink) {
		return 'CreateRelyingPartyLink';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.createLink) {
		return 'CreateLink';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.destroyLink) {
		return 'DestroyLink';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.checkLink) {
		return 'CheckLink';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.getLink) {
		return 'GetLink';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.verifyPassword) {
		return 'VerifyPassword';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.getPrevTwitch) {
		return 'GetPrevTwitch';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.beginEnableTOTP) {
		return 'BeginEnableTOTP';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.completeEnableTOTP) {
		return 'CompleteEnableTOTP';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.regenerateRecoveryTOPTCodes) {
		return 'RegenerateRecoveryTOPTCodes';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.sendTOTPCode) {
		return 'SendTOTPCode';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.verifyTOTPCode) {
		return 'VerifyTOTPCode';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.checkGUIDLinkDelay) {
		return 'CheckGUIDLinkDelay';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.socialLoginLookup) {
		return 'SocialLoginLookup';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.setPrefLang) {
		return 'SetPrefLang';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.magicLinkGenerate) {
		return 'MagicLinkGenerate';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.magicLinkValidate) {
		return 'MagicLinkValidate';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.magicLinkCheckComplete) {
		return 'MagicLinkCheckComplete';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.updateCreatorCode) {
		return 'UpdateCreatorCode';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.getCreatorCodes) {
		return 'GetCreatorCodes';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.getAccessLogs) {
		return 'GetAccessLogs';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.getPromotions) {
		return 'GetPromotions';
    }
	if (fn === pubg.globalaccounts.Identity.prototype.claimPromoCode) {
		return 'ClaimPromoCode';
    }

    throw new Error('Unknown Method');
};


export const IdentityPathPrefix = '/twirp/pubg.globalaccounts.Identity/';

export const createIdentity = (baseURL: string, options = {}): pubg.globalaccounts.Identity => {
    const defaultOpts = {
        baseURL: baseURL + IdentityPathPrefix,
        headers: {
          Accept: 'application/protobuf'
        }
    };
    const axiosOpts = { ...defaultOpts, ...options };
    
    const axios = Axios.create(axiosOpts);

    return pubg.globalaccounts.Identity.create(createTwirpAdapter(axios, getServiceMethodName));
};
