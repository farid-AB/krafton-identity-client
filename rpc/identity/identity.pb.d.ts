import * as $protobuf from "protobufjs";
export namespace pubg {

    namespace globalaccounts {

        class Identity extends $protobuf.rpc.Service {
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Identity;
            public createGlobalAccount(request: pubg.globalaccounts.ICreateAccountParams, callback: pubg.globalaccounts.Identity.CreateGlobalAccountCallback): void;
            public createGlobalAccount(request: pubg.globalaccounts.ICreateAccountParams): Promise<pubg.globalaccounts.GlobalAccountResponse>;
            public findOrInitGPPAccount(request: pubg.globalaccounts.IFindOrInitGPPAccountParams, callback: pubg.globalaccounts.Identity.FindOrInitGPPAccountCallback): void;
            public findOrInitGPPAccount(request: pubg.globalaccounts.IFindOrInitGPPAccountParams): Promise<pubg.globalaccounts.GPPAccountResponse>;
            public deleteGlobalAccount(request: pubg.globalaccounts.IDeleteAccountParams, callback: pubg.globalaccounts.Identity.DeleteGlobalAccountCallback): void;
            public deleteGlobalAccount(request: pubg.globalaccounts.IDeleteAccountParams): Promise<pubg.globalaccounts.StatusResponse>;
            public getGlobalAccount(request: pubg.globalaccounts.ICriteriaQuery, callback: pubg.globalaccounts.Identity.GetGlobalAccountCallback): void;
            public getGlobalAccount(request: pubg.globalaccounts.ICriteriaQuery): Promise<pubg.globalaccounts.GlobalAccountResponse>;
            public activateGlobalAccount(request: pubg.globalaccounts.IActivateAccountParams, callback: pubg.globalaccounts.Identity.ActivateGlobalAccountCallback): void;
            public activateGlobalAccount(request: pubg.globalaccounts.IActivateAccountParams): Promise<pubg.globalaccounts.TokenClaimResponse>;
            public resendActivation(request: pubg.globalaccounts.IResendActivationParams, callback: pubg.globalaccounts.Identity.ResendActivationCallback): void;
            public resendActivation(request: pubg.globalaccounts.IResendActivationParams): Promise<pubg.globalaccounts.StatusResponse>;
            public beginEmailChange(request: pubg.globalaccounts.IBeginEmailChangeParams, callback: pubg.globalaccounts.Identity.BeginEmailChangeCallback): void;
            public beginEmailChange(request: pubg.globalaccounts.IBeginEmailChangeParams): Promise<pubg.globalaccounts.StatusResponse>;
            public completeEmailChange(request: pubg.globalaccounts.ICompleteEmailChangeParams, callback: pubg.globalaccounts.Identity.CompleteEmailChangeCallback): void;
            public completeEmailChange(request: pubg.globalaccounts.ICompleteEmailChangeParams): Promise<pubg.globalaccounts.TokenClaimResponse>;
            public updateUsername(request: pubg.globalaccounts.IUpdateUsernameParams, callback: pubg.globalaccounts.Identity.UpdateUsernameCallback): void;
            public updateUsername(request: pubg.globalaccounts.IUpdateUsernameParams): Promise<pubg.globalaccounts.StatusResponse>;
            public updatePassword(request: pubg.globalaccounts.IUpdatePasswordParams, callback: pubg.globalaccounts.Identity.UpdatePasswordCallback): void;
            public updatePassword(request: pubg.globalaccounts.IUpdatePasswordParams): Promise<pubg.globalaccounts.StatusResponse>;
            public beginForgotPassword(request: pubg.globalaccounts.IBeginForgotPasswordParams, callback: pubg.globalaccounts.Identity.BeginForgotPasswordCallback): void;
            public beginForgotPassword(request: pubg.globalaccounts.IBeginForgotPasswordParams): Promise<pubg.globalaccounts.StatusResponse>;
            public completeForgotPassword(request: pubg.globalaccounts.ICompleteForgotPasswordParams, callback: pubg.globalaccounts.Identity.CompleteForgotPasswordCallback): void;
            public completeForgotPassword(request: pubg.globalaccounts.ICompleteForgotPasswordParams): Promise<pubg.globalaccounts.TokenClaimResponse>;
            public setCommPrefs(request: pubg.globalaccounts.ISetCommPrefsParams, callback: pubg.globalaccounts.Identity.SetCommPrefsCallback): void;
            public setCommPrefs(request: pubg.globalaccounts.ISetCommPrefsParams): Promise<pubg.globalaccounts.StatusResponse>;
            public setPersona(request: pubg.globalaccounts.ISetPersonaParams, callback: pubg.globalaccounts.Identity.SetPersonaCallback): void;
            public setPersona(request: pubg.globalaccounts.ISetPersonaParams): Promise<pubg.globalaccounts.StatusResponse>;
            public linkYoutube(request: pubg.globalaccounts.IGuidInput, callback: pubg.globalaccounts.Identity.LinkYoutubeCallback): void;
            public linkYoutube(request: pubg.globalaccounts.IGuidInput): Promise<pubg.globalaccounts.StatusResponse>;
            public linkLitePC(request: pubg.globalaccounts.IGuidInput, callback: pubg.globalaccounts.Identity.LinkLitePCCallback): void;
            public linkLitePC(request: pubg.globalaccounts.IGuidInput): Promise<pubg.globalaccounts.StatusResponse>;
            public createRelyingPartyLink(request: pubg.globalaccounts.ICreateRelyingPartyLinkParams, callback: pubg.globalaccounts.Identity.CreateRelyingPartyLinkCallback): void;
            public createRelyingPartyLink(request: pubg.globalaccounts.ICreateRelyingPartyLinkParams): Promise<pubg.globalaccounts.StatusResponse>;
            public createLink(request: pubg.globalaccounts.ICreateLinkParams, callback: pubg.globalaccounts.Identity.CreateLinkCallback): void;
            public createLink(request: pubg.globalaccounts.ICreateLinkParams): Promise<pubg.globalaccounts.StatusResponse>;
            public destroyLink(request: pubg.globalaccounts.IDestroyLinkParams, callback: pubg.globalaccounts.Identity.DestroyLinkCallback): void;
            public destroyLink(request: pubg.globalaccounts.IDestroyLinkParams): Promise<pubg.globalaccounts.StatusResponse>;
            public checkLink(request: pubg.globalaccounts.IGuidProviderCombo, callback: pubg.globalaccounts.Identity.CheckLinkCallback): void;
            public checkLink(request: pubg.globalaccounts.IGuidProviderCombo): Promise<pubg.globalaccounts.StatusResponse>;
            public getLink(request: pubg.globalaccounts.IGuidProviderCombo, callback: pubg.globalaccounts.Identity.GetLinkCallback): void;
            public getLink(request: pubg.globalaccounts.IGuidProviderCombo): Promise<pubg.globalaccounts.GetLinkResponse>;
            public verifyPassword(request: pubg.globalaccounts.IVerifyPasswordParams, callback: pubg.globalaccounts.Identity.VerifyPasswordCallback): void;
            public verifyPassword(request: pubg.globalaccounts.IVerifyPasswordParams): Promise<pubg.globalaccounts.GlobalAccountResponse>;
            public getPrevTwitch(request: pubg.globalaccounts.IGetPrevTwitchParams, callback: pubg.globalaccounts.Identity.GetPrevTwitchCallback): void;
            public getPrevTwitch(request: pubg.globalaccounts.IGetPrevTwitchParams): Promise<pubg.globalaccounts.PrevTwitchResponse>;
            public beginEnableTOTP(request: pubg.globalaccounts.IGuidInput, callback: pubg.globalaccounts.Identity.BeginEnableTOTPCallback): void;
            public beginEnableTOTP(request: pubg.globalaccounts.IGuidInput): Promise<pubg.globalaccounts.BeginEnableTOTPResponse>;
            public completeEnableTOTP(request: pubg.globalaccounts.ICompleteEnableTOTPParams, callback: pubg.globalaccounts.Identity.CompleteEnableTOTPCallback): void;
            public completeEnableTOTP(request: pubg.globalaccounts.ICompleteEnableTOTPParams): Promise<pubg.globalaccounts.CompleteEnableTOTPResponse>;
            public regenerateRecoveryTOPTCodes(request: pubg.globalaccounts.IGuidInput, callback: pubg.globalaccounts.Identity.RegenerateRecoveryTOPTCodesCallback): void;
            public regenerateRecoveryTOPTCodes(request: pubg.globalaccounts.IGuidInput): Promise<pubg.globalaccounts.StatusResponse>;
            public sendTOTPCode(request: pubg.globalaccounts.IGuidInput, callback: pubg.globalaccounts.Identity.SendTOTPCodeCallback): void;
            public sendTOTPCode(request: pubg.globalaccounts.IGuidInput): Promise<pubg.globalaccounts.StatusResponse>;
            public verifyTOTPCode(request: pubg.globalaccounts.IVerifyTOTPCodeParams, callback: pubg.globalaccounts.Identity.VerifyTOTPCodeCallback): void;
            public verifyTOTPCode(request: pubg.globalaccounts.IVerifyTOTPCodeParams): Promise<pubg.globalaccounts.StatusResponse>;
            public checkGUIDLinkDelay(request: pubg.globalaccounts.IGuidProviderCombo, callback: pubg.globalaccounts.Identity.CheckGUIDLinkDelayCallback): void;
            public checkGUIDLinkDelay(request: pubg.globalaccounts.IGuidProviderCombo): Promise<pubg.globalaccounts.StatusResponse>;
            public socialLoginLookup(request: pubg.globalaccounts.ISocialLoginParams, callback: pubg.globalaccounts.Identity.SocialLoginLookupCallback): void;
            public socialLoginLookup(request: pubg.globalaccounts.ISocialLoginParams): Promise<pubg.globalaccounts.GlobalAccountResponse>;
            public setPrefLang(request: pubg.globalaccounts.IPreferredLangParams, callback: pubg.globalaccounts.Identity.SetPrefLangCallback): void;
            public setPrefLang(request: pubg.globalaccounts.IPreferredLangParams): Promise<pubg.globalaccounts.StatusResponse>;
            public magicLinkGenerate(request: pubg.globalaccounts.IMagicLinkGenerateParams, callback: pubg.globalaccounts.Identity.MagicLinkGenerateCallback): void;
            public magicLinkGenerate(request: pubg.globalaccounts.IMagicLinkGenerateParams): Promise<pubg.globalaccounts.MagicLinkGenerateResponse>;
            public magicLinkValidate(request: pubg.globalaccounts.IMagicLinkCodeParams, callback: pubg.globalaccounts.Identity.MagicLinkValidateCallback): void;
            public magicLinkValidate(request: pubg.globalaccounts.IMagicLinkCodeParams): Promise<pubg.globalaccounts.MagicLinkValidateResponse>;
            public magicLinkCheckComplete(request: pubg.globalaccounts.IMagicLinkCodeParams, callback: pubg.globalaccounts.Identity.MagicLinkCheckCompleteCallback): void;
            public magicLinkCheckComplete(request: pubg.globalaccounts.IMagicLinkCodeParams): Promise<pubg.globalaccounts.MagicLinkCheckCompleteResponse>;
            public updateCreatorCode(request: pubg.globalaccounts.IUpdateCreatorCodeParams, callback: pubg.globalaccounts.Identity.UpdateCreatorCodeCallback): void;
            public updateCreatorCode(request: pubg.globalaccounts.IUpdateCreatorCodeParams): Promise<pubg.globalaccounts.StatusResponse>;
            public getCreatorCodes(request: pubg.globalaccounts.IGetCreatorCodesParams, callback: pubg.globalaccounts.Identity.GetCreatorCodesCallback): void;
            public getCreatorCodes(request: pubg.globalaccounts.IGetCreatorCodesParams): Promise<pubg.globalaccounts.CodesResponse>;
            public getAccessLogs(request: pubg.globalaccounts.IGuidInput, callback: pubg.globalaccounts.Identity.GetAccessLogsCallback): void;
            public getAccessLogs(request: pubg.globalaccounts.IGuidInput): Promise<pubg.globalaccounts.AccessLogResponse>;
            public getPromotions(request: pubg.globalaccounts.IGetPromotionsParams, callback: pubg.globalaccounts.Identity.GetPromotionsCallback): void;
            public getPromotions(request: pubg.globalaccounts.IGetPromotionsParams): Promise<pubg.globalaccounts.PromotionsResponse>;
            public claimPromoCode(request: pubg.globalaccounts.IClaimPromoCodeParams, callback: pubg.globalaccounts.Identity.ClaimPromoCodeCallback): void;
            public claimPromoCode(request: pubg.globalaccounts.IClaimPromoCodeParams): Promise<pubg.globalaccounts.StatusResponse>;
        }

        namespace Identity {

            type CreateGlobalAccountCallback = (error: (Error|null), response?: pubg.globalaccounts.GlobalAccountResponse) => void;

            type FindOrInitGPPAccountCallback = (error: (Error|null), response?: pubg.globalaccounts.GPPAccountResponse) => void;

            type DeleteGlobalAccountCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type GetGlobalAccountCallback = (error: (Error|null), response?: pubg.globalaccounts.GlobalAccountResponse) => void;

            type ActivateGlobalAccountCallback = (error: (Error|null), response?: pubg.globalaccounts.TokenClaimResponse) => void;

            type ResendActivationCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type BeginEmailChangeCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type CompleteEmailChangeCallback = (error: (Error|null), response?: pubg.globalaccounts.TokenClaimResponse) => void;

            type UpdateUsernameCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type UpdatePasswordCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type BeginForgotPasswordCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type CompleteForgotPasswordCallback = (error: (Error|null), response?: pubg.globalaccounts.TokenClaimResponse) => void;

            type SetCommPrefsCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type SetPersonaCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type LinkYoutubeCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type LinkLitePCCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type CreateRelyingPartyLinkCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type CreateLinkCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type DestroyLinkCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type CheckLinkCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type GetLinkCallback = (error: (Error|null), response?: pubg.globalaccounts.GetLinkResponse) => void;

            type VerifyPasswordCallback = (error: (Error|null), response?: pubg.globalaccounts.GlobalAccountResponse) => void;

            type GetPrevTwitchCallback = (error: (Error|null), response?: pubg.globalaccounts.PrevTwitchResponse) => void;

            type BeginEnableTOTPCallback = (error: (Error|null), response?: pubg.globalaccounts.BeginEnableTOTPResponse) => void;

            type CompleteEnableTOTPCallback = (error: (Error|null), response?: pubg.globalaccounts.CompleteEnableTOTPResponse) => void;

            type RegenerateRecoveryTOPTCodesCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type SendTOTPCodeCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type VerifyTOTPCodeCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type CheckGUIDLinkDelayCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type SocialLoginLookupCallback = (error: (Error|null), response?: pubg.globalaccounts.GlobalAccountResponse) => void;

            type SetPrefLangCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type MagicLinkGenerateCallback = (error: (Error|null), response?: pubg.globalaccounts.MagicLinkGenerateResponse) => void;

            type MagicLinkValidateCallback = (error: (Error|null), response?: pubg.globalaccounts.MagicLinkValidateResponse) => void;

            type MagicLinkCheckCompleteCallback = (error: (Error|null), response?: pubg.globalaccounts.MagicLinkCheckCompleteResponse) => void;

            type UpdateCreatorCodeCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;

            type GetCreatorCodesCallback = (error: (Error|null), response?: pubg.globalaccounts.CodesResponse) => void;

            type GetAccessLogsCallback = (error: (Error|null), response?: pubg.globalaccounts.AccessLogResponse) => void;

            type GetPromotionsCallback = (error: (Error|null), response?: pubg.globalaccounts.PromotionsResponse) => void;

            type ClaimPromoCodeCallback = (error: (Error|null), response?: pubg.globalaccounts.StatusResponse) => void;
        }

        interface IUserData {
            IP?: (string|null);
            Locale?: (string|null);
            Relying?: (string|null);
            Meta?: ({ [k: string]: string }|null);
        }

        class UserData implements IUserData {
            constructor(properties?: pubg.globalaccounts.IUserData);
            public IP: string;
            public Locale: string;
            public Relying: string;
            public Meta: { [k: string]: string };
            public static create(properties?: pubg.globalaccounts.IUserData): pubg.globalaccounts.UserData;
            public static encode(message: pubg.globalaccounts.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.UserData;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.UserData;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.UserData;
            public static toObject(message: pubg.globalaccounts.UserData, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICreateAccountParams {
            User?: (pubg.globalaccounts.IUserData|null);
            Email?: (string|null);
            Password?: (string|null);
            PasswordConfirmation?: (string|null);
            DateOfBirth?: (number|Long|null);
            Country?: (string|null);
            EmailOptIn?: (boolean|null);
            TosAccepted?: (boolean|null);
            ClientID?: (string|null);
            LinkInfo?: (pubg.globalaccounts.IAuthLinkInfo|null);
            ActivateTest?: (string|null);
            Username?: (string|null);
        }

        class CreateAccountParams implements ICreateAccountParams {
            constructor(properties?: pubg.globalaccounts.ICreateAccountParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public Email: string;
            public Password: string;
            public PasswordConfirmation: string;
            public DateOfBirth: (number|Long);
            public Country: string;
            public EmailOptIn: boolean;
            public TosAccepted: boolean;
            public ClientID: string;
            public LinkInfo?: (pubg.globalaccounts.IAuthLinkInfo|null);
            public ActivateTest: string;
            public Username: string;
            public static create(properties?: pubg.globalaccounts.ICreateAccountParams): pubg.globalaccounts.CreateAccountParams;
            public static encode(message: pubg.globalaccounts.ICreateAccountParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICreateAccountParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CreateAccountParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CreateAccountParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CreateAccountParams;
            public static toObject(message: pubg.globalaccounts.CreateAccountParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFindOrInitGPPAccountParams {
            AuthProvider?: (string|null);
            AuthProviderID?: (string|null);
            GameAccountID?: (string|null);
        }

        class FindOrInitGPPAccountParams implements IFindOrInitGPPAccountParams {
            constructor(properties?: pubg.globalaccounts.IFindOrInitGPPAccountParams);
            public AuthProvider: string;
            public AuthProviderID: string;
            public GameAccountID: string;
            public static create(properties?: pubg.globalaccounts.IFindOrInitGPPAccountParams): pubg.globalaccounts.FindOrInitGPPAccountParams;
            public static encode(message: pubg.globalaccounts.IFindOrInitGPPAccountParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IFindOrInitGPPAccountParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.FindOrInitGPPAccountParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.FindOrInitGPPAccountParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.FindOrInitGPPAccountParams;
            public static toObject(message: pubg.globalaccounts.FindOrInitGPPAccountParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGPPAccountResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            Account?: (pubg.globalaccounts.IGlobalAccount|null);
        }

        class GPPAccountResponse implements IGPPAccountResponse {
            constructor(properties?: pubg.globalaccounts.IGPPAccountResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public Account?: (pubg.globalaccounts.IGlobalAccount|null);
            public static create(properties?: pubg.globalaccounts.IGPPAccountResponse): pubg.globalaccounts.GPPAccountResponse;
            public static encode(message: pubg.globalaccounts.IGPPAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGPPAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GPPAccountResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GPPAccountResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GPPAccountResponse;
            public static toObject(message: pubg.globalaccounts.GPPAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IAuthLinkInfo {
            Provider?: (string|null);
            Facebook?: (pubg.globalaccounts.IFacebookLinkInfo|null);
            Google?: (pubg.globalaccounts.IGoogleLinkInfo|null);
            Line?: (pubg.globalaccounts.ILineLinkInfo|null);
            Playstation?: (pubg.globalaccounts.IPlaystationLinkInfo|null);
            Steam?: (pubg.globalaccounts.ISteamLinkInfo|null);
            Twitch?: (pubg.globalaccounts.ITwitchLinkInfo|null);
            Twitter?: (pubg.globalaccounts.ITwitterLinkInfo|null);
            VK?: (pubg.globalaccounts.IVKLinkInfo|null);
            Xbox?: (pubg.globalaccounts.IXboxLinkInfo|null);
            Stadia?: (pubg.globalaccounts.IStadiaLinkInfo|null);
            Discord?: (pubg.globalaccounts.IDiscordLinkInfo|null);
            Reddit?: (pubg.globalaccounts.IRedditLinkInfo|null);
        }

        class AuthLinkInfo implements IAuthLinkInfo {
            constructor(properties?: pubg.globalaccounts.IAuthLinkInfo);
            public Provider: string;
            public Facebook?: (pubg.globalaccounts.IFacebookLinkInfo|null);
            public Google?: (pubg.globalaccounts.IGoogleLinkInfo|null);
            public Line?: (pubg.globalaccounts.ILineLinkInfo|null);
            public Playstation?: (pubg.globalaccounts.IPlaystationLinkInfo|null);
            public Steam?: (pubg.globalaccounts.ISteamLinkInfo|null);
            public Twitch?: (pubg.globalaccounts.ITwitchLinkInfo|null);
            public Twitter?: (pubg.globalaccounts.ITwitterLinkInfo|null);
            public VK?: (pubg.globalaccounts.IVKLinkInfo|null);
            public Xbox?: (pubg.globalaccounts.IXboxLinkInfo|null);
            public Stadia?: (pubg.globalaccounts.IStadiaLinkInfo|null);
            public Discord?: (pubg.globalaccounts.IDiscordLinkInfo|null);
            public Reddit?: (pubg.globalaccounts.IRedditLinkInfo|null);
            public static create(properties?: pubg.globalaccounts.IAuthLinkInfo): pubg.globalaccounts.AuthLinkInfo;
            public static encode(message: pubg.globalaccounts.IAuthLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IAuthLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.AuthLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.AuthLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.AuthLinkInfo;
            public static toObject(message: pubg.globalaccounts.AuthLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFacebookLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            Email?: (string|null);
        }

        class FacebookLinkInfo implements IFacebookLinkInfo {
            constructor(properties?: pubg.globalaccounts.IFacebookLinkInfo);
            public ID: string;
            public DisplayName: string;
            public AccessToken: string;
            public Email: string;
            public static create(properties?: pubg.globalaccounts.IFacebookLinkInfo): pubg.globalaccounts.FacebookLinkInfo;
            public static encode(message: pubg.globalaccounts.IFacebookLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IFacebookLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.FacebookLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.FacebookLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.FacebookLinkInfo;
            public static toObject(message: pubg.globalaccounts.FacebookLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGoogleLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            RefreshToken?: (string|null);
            Email?: (string|null);
        }

        class GoogleLinkInfo implements IGoogleLinkInfo {
            constructor(properties?: pubg.globalaccounts.IGoogleLinkInfo);
            public ID: string;
            public DisplayName: string;
            public AccessToken: string;
            public RefreshToken: string;
            public Email: string;
            public static create(properties?: pubg.globalaccounts.IGoogleLinkInfo): pubg.globalaccounts.GoogleLinkInfo;
            public static encode(message: pubg.globalaccounts.IGoogleLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGoogleLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GoogleLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GoogleLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GoogleLinkInfo;
            public static toObject(message: pubg.globalaccounts.GoogleLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ILineLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            RefreshToken?: (string|null);
            Email?: (string|null);
        }

        class LineLinkInfo implements ILineLinkInfo {
            constructor(properties?: pubg.globalaccounts.ILineLinkInfo);
            public ID: string;
            public DisplayName: string;
            public AccessToken: string;
            public RefreshToken: string;
            public Email: string;
            public static create(properties?: pubg.globalaccounts.ILineLinkInfo): pubg.globalaccounts.LineLinkInfo;
            public static encode(message: pubg.globalaccounts.ILineLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ILineLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.LineLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.LineLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.LineLinkInfo;
            public static toObject(message: pubg.globalaccounts.LineLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPlaystationLinkInfo {
            AccountID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            Age?: (number|null);
            CommunityDomain?: (string|null);
            DateOfBirth?: (string|null);
            Language?: (string|null);
            ParentalControl?: (pubg.globalaccounts.IPSNParentalControl|null);
            Region?: (string|null);
            IsSubAccount?: (boolean|null);
        }

        class PlaystationLinkInfo implements IPlaystationLinkInfo {
            constructor(properties?: pubg.globalaccounts.IPlaystationLinkInfo);
            public AccountID: string;
            public DisplayName: string;
            public AccessToken: string;
            public Age: number;
            public CommunityDomain: string;
            public DateOfBirth: string;
            public Language: string;
            public ParentalControl?: (pubg.globalaccounts.IPSNParentalControl|null);
            public Region: string;
            public IsSubAccount: boolean;
            public static create(properties?: pubg.globalaccounts.IPlaystationLinkInfo): pubg.globalaccounts.PlaystationLinkInfo;
            public static encode(message: pubg.globalaccounts.IPlaystationLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPlaystationLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PlaystationLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PlaystationLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PlaystationLinkInfo;
            public static toObject(message: pubg.globalaccounts.PlaystationLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPSNParentalControl {
            RestrictChat?: (boolean|null);
            RestrictUGM?: (boolean|null);
            RestrictStoreContent?: (boolean|null);
        }

        class PSNParentalControl implements IPSNParentalControl {
            constructor(properties?: pubg.globalaccounts.IPSNParentalControl);
            public RestrictChat: boolean;
            public RestrictUGM: boolean;
            public RestrictStoreContent: boolean;
            public static create(properties?: pubg.globalaccounts.IPSNParentalControl): pubg.globalaccounts.PSNParentalControl;
            public static encode(message: pubg.globalaccounts.IPSNParentalControl, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPSNParentalControl, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PSNParentalControl;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PSNParentalControl;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PSNParentalControl;
            public static toObject(message: pubg.globalaccounts.PSNParentalControl, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IRedditLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            RefreshToken?: (string|null);
        }

        class RedditLinkInfo implements IRedditLinkInfo {
            constructor(properties?: pubg.globalaccounts.IRedditLinkInfo);
            public ID: string;
            public DisplayName: string;
            public AccessToken: string;
            public RefreshToken: string;
            public static create(properties?: pubg.globalaccounts.IRedditLinkInfo): pubg.globalaccounts.RedditLinkInfo;
            public static encode(message: pubg.globalaccounts.IRedditLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IRedditLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.RedditLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.RedditLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.RedditLinkInfo;
            public static toObject(message: pubg.globalaccounts.RedditLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IStadiaLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
        }

        class StadiaLinkInfo implements IStadiaLinkInfo {
            constructor(properties?: pubg.globalaccounts.IStadiaLinkInfo);
            public ID: string;
            public DisplayName: string;
            public static create(properties?: pubg.globalaccounts.IStadiaLinkInfo): pubg.globalaccounts.StadiaLinkInfo;
            public static encode(message: pubg.globalaccounts.IStadiaLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IStadiaLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.StadiaLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.StadiaLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.StadiaLinkInfo;
            public static toObject(message: pubg.globalaccounts.StadiaLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ISteamLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
            Photos?: (pubg.globalaccounts.ISteamPhoto[]|null);
        }

        class SteamLinkInfo implements ISteamLinkInfo {
            constructor(properties?: pubg.globalaccounts.ISteamLinkInfo);
            public ID: string;
            public DisplayName: string;
            public Photos: pubg.globalaccounts.ISteamPhoto[];
            public static create(properties?: pubg.globalaccounts.ISteamLinkInfo): pubg.globalaccounts.SteamLinkInfo;
            public static encode(message: pubg.globalaccounts.ISteamLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ISteamLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.SteamLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.SteamLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.SteamLinkInfo;
            public static toObject(message: pubg.globalaccounts.SteamLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ISteamPhoto {
            Value?: (string|null);
        }

        class SteamPhoto implements ISteamPhoto {
            constructor(properties?: pubg.globalaccounts.ISteamPhoto);
            public Value: string;
            public static create(properties?: pubg.globalaccounts.ISteamPhoto): pubg.globalaccounts.SteamPhoto;
            public static encode(message: pubg.globalaccounts.ISteamPhoto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ISteamPhoto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.SteamPhoto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.SteamPhoto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.SteamPhoto;
            public static toObject(message: pubg.globalaccounts.SteamPhoto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ITwitchLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            RefreshToken?: (string|null);
            Email?: (string|null);
            Username?: (string|null);
        }

        class TwitchLinkInfo implements ITwitchLinkInfo {
            constructor(properties?: pubg.globalaccounts.ITwitchLinkInfo);
            public ID: string;
            public DisplayName: string;
            public AccessToken: string;
            public RefreshToken: string;
            public Email: string;
            public Username: string;
            public static create(properties?: pubg.globalaccounts.ITwitchLinkInfo): pubg.globalaccounts.TwitchLinkInfo;
            public static encode(message: pubg.globalaccounts.ITwitchLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ITwitchLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.TwitchLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.TwitchLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.TwitchLinkInfo;
            public static toObject(message: pubg.globalaccounts.TwitchLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ITwitterLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            Email?: (string|null);
        }

        class TwitterLinkInfo implements ITwitterLinkInfo {
            constructor(properties?: pubg.globalaccounts.ITwitterLinkInfo);
            public ID: string;
            public DisplayName: string;
            public AccessToken: string;
            public Email: string;
            public static create(properties?: pubg.globalaccounts.ITwitterLinkInfo): pubg.globalaccounts.TwitterLinkInfo;
            public static encode(message: pubg.globalaccounts.ITwitterLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ITwitterLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.TwitterLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.TwitterLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.TwitterLinkInfo;
            public static toObject(message: pubg.globalaccounts.TwitterLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IVKLinkInfo {
            ID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            Email?: (string|null);
        }

        class VKLinkInfo implements IVKLinkInfo {
            constructor(properties?: pubg.globalaccounts.IVKLinkInfo);
            public ID: string;
            public DisplayName: string;
            public AccessToken: string;
            public Email: string;
            public static create(properties?: pubg.globalaccounts.IVKLinkInfo): pubg.globalaccounts.VKLinkInfo;
            public static encode(message: pubg.globalaccounts.IVKLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IVKLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.VKLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.VKLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.VKLinkInfo;
            public static toObject(message: pubg.globalaccounts.VKLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IXboxLinkInfo {
            XUID?: (string|null);
            DisplayName?: (string|null);
            AccessToken?: (string|null);
            RefreshToken?: (string|null);
            ValidUntil?: (number|Long|null);
        }

        class XboxLinkInfo implements IXboxLinkInfo {
            constructor(properties?: pubg.globalaccounts.IXboxLinkInfo);
            public XUID: string;
            public DisplayName: string;
            public AccessToken: string;
            public RefreshToken: string;
            public ValidUntil: (number|Long);
            public static create(properties?: pubg.globalaccounts.IXboxLinkInfo): pubg.globalaccounts.XboxLinkInfo;
            public static encode(message: pubg.globalaccounts.IXboxLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IXboxLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.XboxLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.XboxLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.XboxLinkInfo;
            public static toObject(message: pubg.globalaccounts.XboxLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IDiscordLinkInfo {
            ID?: (string|null);
            Username?: (string|null);
            Discriminator?: (string|null);
            Email?: (string|null);
            Verified?: (boolean|null);
            Bot?: (boolean|null);
            AccessToken?: (string|null);
            RefreshToken?: (string|null);
            ExpiresIn?: (number|Long|null);
            AvatarHash?: (string|null);
            PremiumType?: (number|Long|null);
            Flags?: (number|Long|null);
            PublicFlags?: (number|Long|null);
        }

        class DiscordLinkInfo implements IDiscordLinkInfo {
            constructor(properties?: pubg.globalaccounts.IDiscordLinkInfo);
            public ID: string;
            public Username: string;
            public Discriminator: string;
            public Email: string;
            public Verified: boolean;
            public Bot: boolean;
            public AccessToken: string;
            public RefreshToken: string;
            public ExpiresIn: (number|Long);
            public AvatarHash: string;
            public PremiumType: (number|Long);
            public Flags: (number|Long);
            public PublicFlags: (number|Long);
            public static create(properties?: pubg.globalaccounts.IDiscordLinkInfo): pubg.globalaccounts.DiscordLinkInfo;
            public static encode(message: pubg.globalaccounts.IDiscordLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IDiscordLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.DiscordLinkInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.DiscordLinkInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.DiscordLinkInfo;
            public static toObject(message: pubg.globalaccounts.DiscordLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IDeleteAccountParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            Password?: (string|null);
        }

        class DeleteAccountParams implements IDeleteAccountParams {
            constructor(properties?: pubg.globalaccounts.IDeleteAccountParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public Password: string;
            public static create(properties?: pubg.globalaccounts.IDeleteAccountParams): pubg.globalaccounts.DeleteAccountParams;
            public static encode(message: pubg.globalaccounts.IDeleteAccountParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IDeleteAccountParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.DeleteAccountParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.DeleteAccountParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.DeleteAccountParams;
            public static toObject(message: pubg.globalaccounts.DeleteAccountParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IResendActivationParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            ClientID?: (string|null);
            ActivateTest?: (string|null);
        }

        class ResendActivationParams implements IResendActivationParams {
            constructor(properties?: pubg.globalaccounts.IResendActivationParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public ClientID: string;
            public ActivateTest: string;
            public static create(properties?: pubg.globalaccounts.IResendActivationParams): pubg.globalaccounts.ResendActivationParams;
            public static encode(message: pubg.globalaccounts.IResendActivationParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IResendActivationParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.ResendActivationParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.ResendActivationParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.ResendActivationParams;
            public static toObject(message: pubg.globalaccounts.ResendActivationParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGuidInput {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            ClientID?: (string|null);
        }

        class GuidInput implements IGuidInput {
            constructor(properties?: pubg.globalaccounts.IGuidInput);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public ClientID: string;
            public static create(properties?: pubg.globalaccounts.IGuidInput): pubg.globalaccounts.GuidInput;
            public static encode(message: pubg.globalaccounts.IGuidInput, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGuidInput, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GuidInput;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GuidInput;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GuidInput;
            public static toObject(message: pubg.globalaccounts.GuidInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGuidProviderCombo {
            GUID?: (string|null);
            Provider?: (string|null);
        }

        class GuidProviderCombo implements IGuidProviderCombo {
            constructor(properties?: pubg.globalaccounts.IGuidProviderCombo);
            public GUID: string;
            public Provider: string;
            public static create(properties?: pubg.globalaccounts.IGuidProviderCombo): pubg.globalaccounts.GuidProviderCombo;
            public static encode(message: pubg.globalaccounts.IGuidProviderCombo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGuidProviderCombo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GuidProviderCombo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GuidProviderCombo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GuidProviderCombo;
            public static toObject(message: pubg.globalaccounts.GuidProviderCombo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IDestroyLinkParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            Provider?: (string|null);
        }

        class DestroyLinkParams implements IDestroyLinkParams {
            constructor(properties?: pubg.globalaccounts.IDestroyLinkParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public Provider: string;
            public static create(properties?: pubg.globalaccounts.IDestroyLinkParams): pubg.globalaccounts.DestroyLinkParams;
            public static encode(message: pubg.globalaccounts.IDestroyLinkParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IDestroyLinkParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.DestroyLinkParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.DestroyLinkParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.DestroyLinkParams;
            public static toObject(message: pubg.globalaccounts.DestroyLinkParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICriteriaQuery {
            Criteria?: (string|null);
            CriteriaType?: (string|null);
        }

        class CriteriaQuery implements ICriteriaQuery {
            constructor(properties?: pubg.globalaccounts.ICriteriaQuery);
            public Criteria: string;
            public CriteriaType: string;
            public static create(properties?: pubg.globalaccounts.ICriteriaQuery): pubg.globalaccounts.CriteriaQuery;
            public static encode(message: pubg.globalaccounts.ICriteriaQuery, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICriteriaQuery, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CriteriaQuery;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CriteriaQuery;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CriteriaQuery;
            public static toObject(message: pubg.globalaccounts.CriteriaQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IActivateAccountParams {
            User?: (pubg.globalaccounts.IUserData|null);
            ActivationToken?: (string|null);
        }

        class ActivateAccountParams implements IActivateAccountParams {
            constructor(properties?: pubg.globalaccounts.IActivateAccountParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public ActivationToken: string;
            public static create(properties?: pubg.globalaccounts.IActivateAccountParams): pubg.globalaccounts.ActivateAccountParams;
            public static encode(message: pubg.globalaccounts.IActivateAccountParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IActivateAccountParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.ActivateAccountParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.ActivateAccountParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.ActivateAccountParams;
            public static toObject(message: pubg.globalaccounts.ActivateAccountParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBeginEmailChangeParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            NewEmail?: (string|null);
            Password?: (string|null);
        }

        class BeginEmailChangeParams implements IBeginEmailChangeParams {
            constructor(properties?: pubg.globalaccounts.IBeginEmailChangeParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public NewEmail: string;
            public Password: string;
            public static create(properties?: pubg.globalaccounts.IBeginEmailChangeParams): pubg.globalaccounts.BeginEmailChangeParams;
            public static encode(message: pubg.globalaccounts.IBeginEmailChangeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IBeginEmailChangeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.BeginEmailChangeParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.BeginEmailChangeParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.BeginEmailChangeParams;
            public static toObject(message: pubg.globalaccounts.BeginEmailChangeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICompleteEmailChangeParams {
            User?: (pubg.globalaccounts.IUserData|null);
            Token?: (string|null);
        }

        class CompleteEmailChangeParams implements ICompleteEmailChangeParams {
            constructor(properties?: pubg.globalaccounts.ICompleteEmailChangeParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public Token: string;
            public static create(properties?: pubg.globalaccounts.ICompleteEmailChangeParams): pubg.globalaccounts.CompleteEmailChangeParams;
            public static encode(message: pubg.globalaccounts.ICompleteEmailChangeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICompleteEmailChangeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CompleteEmailChangeParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CompleteEmailChangeParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CompleteEmailChangeParams;
            public static toObject(message: pubg.globalaccounts.CompleteEmailChangeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUpdateUsernameParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            NewUsername?: (string|null);
        }

        class UpdateUsernameParams implements IUpdateUsernameParams {
            constructor(properties?: pubg.globalaccounts.IUpdateUsernameParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public NewUsername: string;
            public static create(properties?: pubg.globalaccounts.IUpdateUsernameParams): pubg.globalaccounts.UpdateUsernameParams;
            public static encode(message: pubg.globalaccounts.IUpdateUsernameParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IUpdateUsernameParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.UpdateUsernameParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.UpdateUsernameParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.UpdateUsernameParams;
            public static toObject(message: pubg.globalaccounts.UpdateUsernameParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUpdatePasswordParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            OldPass?: (string|null);
            NewPass?: (string|null);
            PassConf?: (string|null);
        }

        class UpdatePasswordParams implements IUpdatePasswordParams {
            constructor(properties?: pubg.globalaccounts.IUpdatePasswordParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public OldPass: string;
            public NewPass: string;
            public PassConf: string;
            public static create(properties?: pubg.globalaccounts.IUpdatePasswordParams): pubg.globalaccounts.UpdatePasswordParams;
            public static encode(message: pubg.globalaccounts.IUpdatePasswordParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IUpdatePasswordParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.UpdatePasswordParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.UpdatePasswordParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.UpdatePasswordParams;
            public static toObject(message: pubg.globalaccounts.UpdatePasswordParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBeginForgotPasswordParams {
            User?: (pubg.globalaccounts.IUserData|null);
            Email?: (string|null);
            GUID?: (string|null);
            ClientID?: (string|null);
        }

        class BeginForgotPasswordParams implements IBeginForgotPasswordParams {
            constructor(properties?: pubg.globalaccounts.IBeginForgotPasswordParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public Email: string;
            public GUID: string;
            public ClientID: string;
            public static create(properties?: pubg.globalaccounts.IBeginForgotPasswordParams): pubg.globalaccounts.BeginForgotPasswordParams;
            public static encode(message: pubg.globalaccounts.IBeginForgotPasswordParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IBeginForgotPasswordParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.BeginForgotPasswordParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.BeginForgotPasswordParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.BeginForgotPasswordParams;
            public static toObject(message: pubg.globalaccounts.BeginForgotPasswordParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICompleteForgotPasswordParams {
            User?: (pubg.globalaccounts.IUserData|null);
            ResetToken?: (string|null);
            NewPass?: (string|null);
            PassConf?: (string|null);
        }

        class CompleteForgotPasswordParams implements ICompleteForgotPasswordParams {
            constructor(properties?: pubg.globalaccounts.ICompleteForgotPasswordParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public ResetToken: string;
            public NewPass: string;
            public PassConf: string;
            public static create(properties?: pubg.globalaccounts.ICompleteForgotPasswordParams): pubg.globalaccounts.CompleteForgotPasswordParams;
            public static encode(message: pubg.globalaccounts.ICompleteForgotPasswordParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICompleteForgotPasswordParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CompleteForgotPasswordParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CompleteForgotPasswordParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CompleteForgotPasswordParams;
            public static toObject(message: pubg.globalaccounts.CompleteForgotPasswordParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ISetCommPrefsParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            EmailOptIn?: (boolean|null);
        }

        class SetCommPrefsParams implements ISetCommPrefsParams {
            constructor(properties?: pubg.globalaccounts.ISetCommPrefsParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public EmailOptIn: boolean;
            public static create(properties?: pubg.globalaccounts.ISetCommPrefsParams): pubg.globalaccounts.SetCommPrefsParams;
            public static encode(message: pubg.globalaccounts.ISetCommPrefsParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ISetCommPrefsParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.SetCommPrefsParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.SetCommPrefsParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.SetCommPrefsParams;
            public static toObject(message: pubg.globalaccounts.SetCommPrefsParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ISetPersonaParams {
            GUID?: (string|null);
            Platform?: (string|null);
        }

        class SetPersonaParams implements ISetPersonaParams {
            constructor(properties?: pubg.globalaccounts.ISetPersonaParams);
            public GUID: string;
            public Platform: string;
            public static create(properties?: pubg.globalaccounts.ISetPersonaParams): pubg.globalaccounts.SetPersonaParams;
            public static encode(message: pubg.globalaccounts.ISetPersonaParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ISetPersonaParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.SetPersonaParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.SetPersonaParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.SetPersonaParams;
            public static toObject(message: pubg.globalaccounts.SetPersonaParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICreateLinkParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            LinkInfo?: (pubg.globalaccounts.IAuthLinkInfo|null);
            MagicLinkCode?: (string|null);
        }

        class CreateLinkParams implements ICreateLinkParams {
            constructor(properties?: pubg.globalaccounts.ICreateLinkParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public LinkInfo?: (pubg.globalaccounts.IAuthLinkInfo|null);
            public MagicLinkCode: string;
            public static create(properties?: pubg.globalaccounts.ICreateLinkParams): pubg.globalaccounts.CreateLinkParams;
            public static encode(message: pubg.globalaccounts.ICreateLinkParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICreateLinkParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CreateLinkParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CreateLinkParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CreateLinkParams;
            public static toObject(message: pubg.globalaccounts.CreateLinkParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICreateRelyingPartyLinkParams {
            User?: (pubg.globalaccounts.IUserData|null);
            Provider?: (string|null);
            GUID?: (string|null);
            ClientID?: (string|null);
        }

        class CreateRelyingPartyLinkParams implements ICreateRelyingPartyLinkParams {
            constructor(properties?: pubg.globalaccounts.ICreateRelyingPartyLinkParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public Provider: string;
            public GUID: string;
            public ClientID: string;
            public static create(properties?: pubg.globalaccounts.ICreateRelyingPartyLinkParams): pubg.globalaccounts.CreateRelyingPartyLinkParams;
            public static encode(message: pubg.globalaccounts.ICreateRelyingPartyLinkParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICreateRelyingPartyLinkParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CreateRelyingPartyLinkParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CreateRelyingPartyLinkParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CreateRelyingPartyLinkParams;
            public static toObject(message: pubg.globalaccounts.CreateRelyingPartyLinkParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IVerifyPasswordParams {
            User?: (pubg.globalaccounts.IUserData|null);
            Email?: (string|null);
            Password?: (string|null);
        }

        class VerifyPasswordParams implements IVerifyPasswordParams {
            constructor(properties?: pubg.globalaccounts.IVerifyPasswordParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public Email: string;
            public Password: string;
            public static create(properties?: pubg.globalaccounts.IVerifyPasswordParams): pubg.globalaccounts.VerifyPasswordParams;
            public static encode(message: pubg.globalaccounts.IVerifyPasswordParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IVerifyPasswordParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.VerifyPasswordParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.VerifyPasswordParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.VerifyPasswordParams;
            public static toObject(message: pubg.globalaccounts.VerifyPasswordParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGetPrevTwitchParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
        }

        class GetPrevTwitchParams implements IGetPrevTwitchParams {
            constructor(properties?: pubg.globalaccounts.IGetPrevTwitchParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public static create(properties?: pubg.globalaccounts.IGetPrevTwitchParams): pubg.globalaccounts.GetPrevTwitchParams;
            public static encode(message: pubg.globalaccounts.IGetPrevTwitchParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGetPrevTwitchParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GetPrevTwitchParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GetPrevTwitchParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GetPrevTwitchParams;
            public static toObject(message: pubg.globalaccounts.GetPrevTwitchParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICompleteEnableTOTPParams {
            GUID?: (string|null);
            Code?: (string|null);
        }

        class CompleteEnableTOTPParams implements ICompleteEnableTOTPParams {
            constructor(properties?: pubg.globalaccounts.ICompleteEnableTOTPParams);
            public GUID: string;
            public Code: string;
            public static create(properties?: pubg.globalaccounts.ICompleteEnableTOTPParams): pubg.globalaccounts.CompleteEnableTOTPParams;
            public static encode(message: pubg.globalaccounts.ICompleteEnableTOTPParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICompleteEnableTOTPParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CompleteEnableTOTPParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CompleteEnableTOTPParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CompleteEnableTOTPParams;
            public static toObject(message: pubg.globalaccounts.CompleteEnableTOTPParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IVerifyTOTPCodeParams {
            GUID?: (string|null);
            Password?: (string|null);
            Code?: (string|null);
        }

        class VerifyTOTPCodeParams implements IVerifyTOTPCodeParams {
            constructor(properties?: pubg.globalaccounts.IVerifyTOTPCodeParams);
            public GUID: string;
            public Password: string;
            public Code: string;
            public static create(properties?: pubg.globalaccounts.IVerifyTOTPCodeParams): pubg.globalaccounts.VerifyTOTPCodeParams;
            public static encode(message: pubg.globalaccounts.IVerifyTOTPCodeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IVerifyTOTPCodeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.VerifyTOTPCodeParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.VerifyTOTPCodeParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.VerifyTOTPCodeParams;
            public static toObject(message: pubg.globalaccounts.VerifyTOTPCodeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ISocialLoginParams {
            User?: (pubg.globalaccounts.IUserData|null);
            ProviderID?: (string|null);
        }

        class SocialLoginParams implements ISocialLoginParams {
            constructor(properties?: pubg.globalaccounts.ISocialLoginParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.ISocialLoginParams): pubg.globalaccounts.SocialLoginParams;
            public static encode(message: pubg.globalaccounts.ISocialLoginParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ISocialLoginParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.SocialLoginParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.SocialLoginParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.SocialLoginParams;
            public static toObject(message: pubg.globalaccounts.SocialLoginParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPreferredLangParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            Language?: (string|null);
        }

        class PreferredLangParams implements IPreferredLangParams {
            constructor(properties?: pubg.globalaccounts.IPreferredLangParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public Language: string;
            public static create(properties?: pubg.globalaccounts.IPreferredLangParams): pubg.globalaccounts.PreferredLangParams;
            public static encode(message: pubg.globalaccounts.IPreferredLangParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPreferredLangParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PreferredLangParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PreferredLangParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PreferredLangParams;
            public static toObject(message: pubg.globalaccounts.PreferredLangParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IMagicLinkGenerateParams {
            User?: (pubg.globalaccounts.IUserData|null);
            Provider?: (string|null);
            ProviderID?: (string|null);
            DisplayName?: (string|null);
        }

        class MagicLinkGenerateParams implements IMagicLinkGenerateParams {
            constructor(properties?: pubg.globalaccounts.IMagicLinkGenerateParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public Provider: string;
            public ProviderID: string;
            public DisplayName: string;
            public static create(properties?: pubg.globalaccounts.IMagicLinkGenerateParams): pubg.globalaccounts.MagicLinkGenerateParams;
            public static encode(message: pubg.globalaccounts.IMagicLinkGenerateParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IMagicLinkGenerateParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.MagicLinkGenerateParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.MagicLinkGenerateParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.MagicLinkGenerateParams;
            public static toObject(message: pubg.globalaccounts.MagicLinkGenerateParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IMagicLinkCodeParams {
            User?: (pubg.globalaccounts.IUserData|null);
            LinkCode?: (string|null);
        }

        class MagicLinkCodeParams implements IMagicLinkCodeParams {
            constructor(properties?: pubg.globalaccounts.IMagicLinkCodeParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public LinkCode: string;
            public static create(properties?: pubg.globalaccounts.IMagicLinkCodeParams): pubg.globalaccounts.MagicLinkCodeParams;
            public static encode(message: pubg.globalaccounts.IMagicLinkCodeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IMagicLinkCodeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.MagicLinkCodeParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.MagicLinkCodeParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.MagicLinkCodeParams;
            public static toObject(message: pubg.globalaccounts.MagicLinkCodeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUpdateCreatorCodeParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            CreatorCode?: (string|null);
        }

        class UpdateCreatorCodeParams implements IUpdateCreatorCodeParams {
            constructor(properties?: pubg.globalaccounts.IUpdateCreatorCodeParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public CreatorCode: string;
            public static create(properties?: pubg.globalaccounts.IUpdateCreatorCodeParams): pubg.globalaccounts.UpdateCreatorCodeParams;
            public static encode(message: pubg.globalaccounts.IUpdateCreatorCodeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IUpdateCreatorCodeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.UpdateCreatorCodeParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.UpdateCreatorCodeParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.UpdateCreatorCodeParams;
            public static toObject(message: pubg.globalaccounts.UpdateCreatorCodeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGetCreatorCodesParams {
        }

        class GetCreatorCodesParams implements IGetCreatorCodesParams {
            constructor(properties?: pubg.globalaccounts.IGetCreatorCodesParams);
            public static create(properties?: pubg.globalaccounts.IGetCreatorCodesParams): pubg.globalaccounts.GetCreatorCodesParams;
            public static encode(message: pubg.globalaccounts.IGetCreatorCodesParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGetCreatorCodesParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GetCreatorCodesParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GetCreatorCodesParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GetCreatorCodesParams;
            public static toObject(message: pubg.globalaccounts.GetCreatorCodesParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGetPromotionsParams {
        }

        class GetPromotionsParams implements IGetPromotionsParams {
            constructor(properties?: pubg.globalaccounts.IGetPromotionsParams);
            public static create(properties?: pubg.globalaccounts.IGetPromotionsParams): pubg.globalaccounts.GetPromotionsParams;
            public static encode(message: pubg.globalaccounts.IGetPromotionsParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGetPromotionsParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GetPromotionsParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GetPromotionsParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GetPromotionsParams;
            public static toObject(message: pubg.globalaccounts.GetPromotionsParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IClaimPromoCodeParams {
            User?: (pubg.globalaccounts.IUserData|null);
            GUID?: (string|null);
            PromotionID?: (string|null);
        }

        class ClaimPromoCodeParams implements IClaimPromoCodeParams {
            constructor(properties?: pubg.globalaccounts.IClaimPromoCodeParams);
            public User?: (pubg.globalaccounts.IUserData|null);
            public GUID: string;
            public PromotionID: string;
            public static create(properties?: pubg.globalaccounts.IClaimPromoCodeParams): pubg.globalaccounts.ClaimPromoCodeParams;
            public static encode(message: pubg.globalaccounts.IClaimPromoCodeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IClaimPromoCodeParams, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.ClaimPromoCodeParams;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.ClaimPromoCodeParams;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.ClaimPromoCodeParams;
            public static toObject(message: pubg.globalaccounts.ClaimPromoCodeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IStatusResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            Error?: (string|null);
        }

        class StatusResponse implements IStatusResponse {
            constructor(properties?: pubg.globalaccounts.IStatusResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public Error: string;
            public static create(properties?: pubg.globalaccounts.IStatusResponse): pubg.globalaccounts.StatusResponse;
            public static encode(message: pubg.globalaccounts.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.StatusResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.StatusResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.StatusResponse;
            public static toObject(message: pubg.globalaccounts.StatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ITokenClaimResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            Error?: (string|null);
            TokenClaim?: ({ [k: string]: string }|null);
        }

        class TokenClaimResponse implements ITokenClaimResponse {
            constructor(properties?: pubg.globalaccounts.ITokenClaimResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public Error: string;
            public TokenClaim: { [k: string]: string };
            public static create(properties?: pubg.globalaccounts.ITokenClaimResponse): pubg.globalaccounts.TokenClaimResponse;
            public static encode(message: pubg.globalaccounts.ITokenClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ITokenClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.TokenClaimResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.TokenClaimResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.TokenClaimResponse;
            public static toObject(message: pubg.globalaccounts.TokenClaimResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGlobalAccountResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            Account?: (pubg.globalaccounts.IGlobalAccount|null);
        }

        class GlobalAccountResponse implements IGlobalAccountResponse {
            constructor(properties?: pubg.globalaccounts.IGlobalAccountResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public Account?: (pubg.globalaccounts.IGlobalAccount|null);
            public static create(properties?: pubg.globalaccounts.IGlobalAccountResponse): pubg.globalaccounts.GlobalAccountResponse;
            public static encode(message: pubg.globalaccounts.IGlobalAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGlobalAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GlobalAccountResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GlobalAccountResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GlobalAccountResponse;
            public static toObject(message: pubg.globalaccounts.GlobalAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGetLinkResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            Link?: (pubg.globalaccounts.IAuthenticationData|null);
        }

        class GetLinkResponse implements IGetLinkResponse {
            constructor(properties?: pubg.globalaccounts.IGetLinkResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public Link?: (pubg.globalaccounts.IAuthenticationData|null);
            public static create(properties?: pubg.globalaccounts.IGetLinkResponse): pubg.globalaccounts.GetLinkResponse;
            public static encode(message: pubg.globalaccounts.IGetLinkResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGetLinkResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GetLinkResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GetLinkResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GetLinkResponse;
            public static toObject(message: pubg.globalaccounts.GetLinkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPrevTwitchResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            Data?: (pubg.globalaccounts.IPrevTwitch|null);
        }

        class PrevTwitchResponse implements IPrevTwitchResponse {
            constructor(properties?: pubg.globalaccounts.IPrevTwitchResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public Data?: (pubg.globalaccounts.IPrevTwitch|null);
            public static create(properties?: pubg.globalaccounts.IPrevTwitchResponse): pubg.globalaccounts.PrevTwitchResponse;
            public static encode(message: pubg.globalaccounts.IPrevTwitchResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPrevTwitchResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PrevTwitchResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PrevTwitchResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PrevTwitchResponse;
            public static toObject(message: pubg.globalaccounts.PrevTwitchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBeginEnableTOTPResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            TOTPSetupImage?: (Uint8Array|null);
        }

        class BeginEnableTOTPResponse implements IBeginEnableTOTPResponse {
            constructor(properties?: pubg.globalaccounts.IBeginEnableTOTPResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public TOTPSetupImage: Uint8Array;
            public static create(properties?: pubg.globalaccounts.IBeginEnableTOTPResponse): pubg.globalaccounts.BeginEnableTOTPResponse;
            public static encode(message: pubg.globalaccounts.IBeginEnableTOTPResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IBeginEnableTOTPResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.BeginEnableTOTPResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.BeginEnableTOTPResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.BeginEnableTOTPResponse;
            public static toObject(message: pubg.globalaccounts.BeginEnableTOTPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICompleteEnableTOTPResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            Result?: (boolean|null);
        }

        class CompleteEnableTOTPResponse implements ICompleteEnableTOTPResponse {
            constructor(properties?: pubg.globalaccounts.ICompleteEnableTOTPResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public Result: boolean;
            public static create(properties?: pubg.globalaccounts.ICompleteEnableTOTPResponse): pubg.globalaccounts.CompleteEnableTOTPResponse;
            public static encode(message: pubg.globalaccounts.ICompleteEnableTOTPResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICompleteEnableTOTPResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CompleteEnableTOTPResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CompleteEnableTOTPResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CompleteEnableTOTPResponse;
            public static toObject(message: pubg.globalaccounts.CompleteEnableTOTPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IMagicLinkGenerateResponse {
            LinkCode?: (string|null);
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
        }

        class MagicLinkGenerateResponse implements IMagicLinkGenerateResponse {
            constructor(properties?: pubg.globalaccounts.IMagicLinkGenerateResponse);
            public LinkCode: string;
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public static create(properties?: pubg.globalaccounts.IMagicLinkGenerateResponse): pubg.globalaccounts.MagicLinkGenerateResponse;
            public static encode(message: pubg.globalaccounts.IMagicLinkGenerateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IMagicLinkGenerateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.MagicLinkGenerateResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.MagicLinkGenerateResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.MagicLinkGenerateResponse;
            public static toObject(message: pubg.globalaccounts.MagicLinkGenerateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IMagicLinkValidateResponse {
            Provider?: (string|null);
            ProviderID?: (string|null);
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            DisplayName?: (string|null);
        }

        class MagicLinkValidateResponse implements IMagicLinkValidateResponse {
            constructor(properties?: pubg.globalaccounts.IMagicLinkValidateResponse);
            public Provider: string;
            public ProviderID: string;
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public DisplayName: string;
            public static create(properties?: pubg.globalaccounts.IMagicLinkValidateResponse): pubg.globalaccounts.MagicLinkValidateResponse;
            public static encode(message: pubg.globalaccounts.IMagicLinkValidateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IMagicLinkValidateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.MagicLinkValidateResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.MagicLinkValidateResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.MagicLinkValidateResponse;
            public static toObject(message: pubg.globalaccounts.MagicLinkValidateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IMagicLinkCheckCompleteResponse {
            GUID?: (string|null);
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
        }

        class MagicLinkCheckCompleteResponse implements IMagicLinkCheckCompleteResponse {
            constructor(properties?: pubg.globalaccounts.IMagicLinkCheckCompleteResponse);
            public GUID: string;
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public static create(properties?: pubg.globalaccounts.IMagicLinkCheckCompleteResponse): pubg.globalaccounts.MagicLinkCheckCompleteResponse;
            public static encode(message: pubg.globalaccounts.IMagicLinkCheckCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IMagicLinkCheckCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.MagicLinkCheckCompleteResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.MagicLinkCheckCompleteResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.MagicLinkCheckCompleteResponse;
            public static toObject(message: pubg.globalaccounts.MagicLinkCheckCompleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICodesResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            CreatorCodes?: (string[]|null);
            CreatorNames?: (string[]|null);
        }

        class CodesResponse implements ICodesResponse {
            constructor(properties?: pubg.globalaccounts.ICodesResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public CreatorCodes: string[];
            public CreatorNames: string[];
            public static create(properties?: pubg.globalaccounts.ICodesResponse): pubg.globalaccounts.CodesResponse;
            public static encode(message: pubg.globalaccounts.ICodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CodesResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CodesResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CodesResponse;
            public static toObject(message: pubg.globalaccounts.CodesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPromotionsResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            Promotions?: (pubg.globalaccounts.IPromotionInfo[]|null);
        }

        class PromotionsResponse implements IPromotionsResponse {
            constructor(properties?: pubg.globalaccounts.IPromotionsResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public Promotions: pubg.globalaccounts.IPromotionInfo[];
            public static create(properties?: pubg.globalaccounts.IPromotionsResponse): pubg.globalaccounts.PromotionsResponse;
            public static encode(message: pubg.globalaccounts.IPromotionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPromotionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PromotionsResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PromotionsResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PromotionsResponse;
            public static toObject(message: pubg.globalaccounts.PromotionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGlobalAccount {
            GUID?: (string|null);
            Username?: (string|null);
            PersonaPlatform?: (string|null);
            Activated?: (boolean|null);
            EmailOptIn?: (boolean|null);
            Authentications?: (pubg.globalaccounts.IAuthenticationData|null);
            Platforms?: ({ [k: string]: pubg.globalaccounts.IPlatformAccount }|null);
            Profile?: (pubg.globalaccounts.IProfile|null);
            GameAccounts?: (pubg.globalaccounts.IGameAccount[]|null);
        }

        class GlobalAccount implements IGlobalAccount {
            constructor(properties?: pubg.globalaccounts.IGlobalAccount);
            public GUID: string;
            public Username: string;
            public PersonaPlatform: string;
            public Activated: boolean;
            public EmailOptIn: boolean;
            public Authentications?: (pubg.globalaccounts.IAuthenticationData|null);
            public Platforms: { [k: string]: pubg.globalaccounts.IPlatformAccount };
            public Profile?: (pubg.globalaccounts.IProfile|null);
            public GameAccounts: pubg.globalaccounts.IGameAccount[];
            public static create(properties?: pubg.globalaccounts.IGlobalAccount): pubg.globalaccounts.GlobalAccount;
            public static encode(message: pubg.globalaccounts.IGlobalAccount, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGlobalAccount, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GlobalAccount;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GlobalAccount;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GlobalAccount;
            public static toObject(message: pubg.globalaccounts.GlobalAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IAuthenticationData {
            local?: (pubg.globalaccounts.ILocalAuth|null);
            twitch?: (pubg.globalaccounts.ITwitchAuth|null);
            facebook?: (pubg.globalaccounts.IFacebookAuth|null);
            litepc?: (pubg.globalaccounts.ILitePCAuth|null);
            google?: (pubg.globalaccounts.IGoogleAuth|null);
            line?: (pubg.globalaccounts.ILineAuth|null);
            twitter?: (pubg.globalaccounts.ITwitterAuth|null);
            psn?: (pubg.globalaccounts.IPlaystationAuth|null);
            steam?: (pubg.globalaccounts.ISteamAuth|null);
            xbox?: (pubg.globalaccounts.IXboxAuth|null);
            vk?: (pubg.globalaccounts.IVkAuth|null);
            youtube?: (pubg.globalaccounts.IYoutubeAuth|null);
            stadia?: (pubg.globalaccounts.IStadiaAuth|null);
            discord?: (pubg.globalaccounts.IDiscordAuth|null);
            reddit?: (pubg.globalaccounts.IRedditAuth|null);
            afreecatv?: (pubg.globalaccounts.IAfreecaTVAuth|null);
        }

        class AuthenticationData implements IAuthenticationData {
            constructor(properties?: pubg.globalaccounts.IAuthenticationData);
            public local?: (pubg.globalaccounts.ILocalAuth|null);
            public twitch?: (pubg.globalaccounts.ITwitchAuth|null);
            public facebook?: (pubg.globalaccounts.IFacebookAuth|null);
            public litepc?: (pubg.globalaccounts.ILitePCAuth|null);
            public google?: (pubg.globalaccounts.IGoogleAuth|null);
            public line?: (pubg.globalaccounts.ILineAuth|null);
            public twitter?: (pubg.globalaccounts.ITwitterAuth|null);
            public psn?: (pubg.globalaccounts.IPlaystationAuth|null);
            public steam?: (pubg.globalaccounts.ISteamAuth|null);
            public xbox?: (pubg.globalaccounts.IXboxAuth|null);
            public vk?: (pubg.globalaccounts.IVkAuth|null);
            public youtube?: (pubg.globalaccounts.IYoutubeAuth|null);
            public stadia?: (pubg.globalaccounts.IStadiaAuth|null);
            public discord?: (pubg.globalaccounts.IDiscordAuth|null);
            public reddit?: (pubg.globalaccounts.IRedditAuth|null);
            public afreecatv?: (pubg.globalaccounts.IAfreecaTVAuth|null);
            public static create(properties?: pubg.globalaccounts.IAuthenticationData): pubg.globalaccounts.AuthenticationData;
            public static encode(message: pubg.globalaccounts.IAuthenticationData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IAuthenticationData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.AuthenticationData;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.AuthenticationData;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.AuthenticationData;
            public static toObject(message: pubg.globalaccounts.AuthenticationData, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ILocalAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            Confirmed?: (boolean|null);
            Email?: (string|null);
            Locked?: (boolean|null);
            OnHold?: (boolean|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class LocalAuth implements ILocalAuth {
            constructor(properties?: pubg.globalaccounts.ILocalAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public Confirmed: boolean;
            public Email: string;
            public Locked: boolean;
            public OnHold: boolean;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.ILocalAuth): pubg.globalaccounts.LocalAuth;
            public static encode(message: pubg.globalaccounts.ILocalAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ILocalAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.LocalAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.LocalAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.LocalAuth;
            public static toObject(message: pubg.globalaccounts.LocalAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ITwitchAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            BadCredentials?: (boolean|null);
            Email?: (string|null);
            TwitchID?: (string|null);
            Username?: (string|null);
            AccessToken?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class TwitchAuth implements ITwitchAuth {
            constructor(properties?: pubg.globalaccounts.ITwitchAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public BadCredentials: boolean;
            public Email: string;
            public TwitchID: string;
            public Username: string;
            public AccessToken: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.ITwitchAuth): pubg.globalaccounts.TwitchAuth;
            public static encode(message: pubg.globalaccounts.ITwitchAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ITwitchAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.TwitchAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.TwitchAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.TwitchAuth;
            public static toObject(message: pubg.globalaccounts.TwitchAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFacebookAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            Email?: (string|null);
            FacebookID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class FacebookAuth implements IFacebookAuth {
            constructor(properties?: pubg.globalaccounts.IFacebookAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public Email: string;
            public FacebookID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.IFacebookAuth): pubg.globalaccounts.FacebookAuth;
            public static encode(message: pubg.globalaccounts.IFacebookAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IFacebookAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.FacebookAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.FacebookAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.FacebookAuth;
            public static toObject(message: pubg.globalaccounts.FacebookAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ILitePCAuth {
            GUID?: (string|null);
            ProviderID?: (string|null);
            Deactivated?: (boolean|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
        }

        class LitePCAuth implements ILitePCAuth {
            constructor(properties?: pubg.globalaccounts.ILitePCAuth);
            public GUID: string;
            public ProviderID: string;
            public Deactivated: boolean;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public static create(properties?: pubg.globalaccounts.ILitePCAuth): pubg.globalaccounts.LitePCAuth;
            public static encode(message: pubg.globalaccounts.ILitePCAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ILitePCAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.LitePCAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.LitePCAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.LitePCAuth;
            public static toObject(message: pubg.globalaccounts.LitePCAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IYoutubeAuth {
            GUID?: (string|null);
            ProviderID?: (string|null);
            Deactivated?: (boolean|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
        }

        class YoutubeAuth implements IYoutubeAuth {
            constructor(properties?: pubg.globalaccounts.IYoutubeAuth);
            public GUID: string;
            public ProviderID: string;
            public Deactivated: boolean;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public static create(properties?: pubg.globalaccounts.IYoutubeAuth): pubg.globalaccounts.YoutubeAuth;
            public static encode(message: pubg.globalaccounts.IYoutubeAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IYoutubeAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.YoutubeAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.YoutubeAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.YoutubeAuth;
            public static toObject(message: pubg.globalaccounts.YoutubeAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IAfreecaTVAuth {
            GUID?: (string|null);
            ProviderID?: (string|null);
            Deactivated?: (boolean|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
        }

        class AfreecaTVAuth implements IAfreecaTVAuth {
            constructor(properties?: pubg.globalaccounts.IAfreecaTVAuth);
            public GUID: string;
            public ProviderID: string;
            public Deactivated: boolean;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public static create(properties?: pubg.globalaccounts.IAfreecaTVAuth): pubg.globalaccounts.AfreecaTVAuth;
            public static encode(message: pubg.globalaccounts.IAfreecaTVAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IAfreecaTVAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.AfreecaTVAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.AfreecaTVAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.AfreecaTVAuth;
            public static toObject(message: pubg.globalaccounts.AfreecaTVAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGoogleAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            Email?: (string|null);
            GoogleID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class GoogleAuth implements IGoogleAuth {
            constructor(properties?: pubg.globalaccounts.IGoogleAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public Email: string;
            public GoogleID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.IGoogleAuth): pubg.globalaccounts.GoogleAuth;
            public static encode(message: pubg.globalaccounts.IGoogleAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGoogleAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GoogleAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GoogleAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GoogleAuth;
            public static toObject(message: pubg.globalaccounts.GoogleAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ILineAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            Email?: (string|null);
            LineID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class LineAuth implements ILineAuth {
            constructor(properties?: pubg.globalaccounts.ILineAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public Email: string;
            public LineID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.ILineAuth): pubg.globalaccounts.LineAuth;
            public static encode(message: pubg.globalaccounts.ILineAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ILineAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.LineAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.LineAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.LineAuth;
            public static toObject(message: pubg.globalaccounts.LineAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ITwitterAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            Email?: (string|null);
            TwitterID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class TwitterAuth implements ITwitterAuth {
            constructor(properties?: pubg.globalaccounts.ITwitterAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public Email: string;
            public TwitterID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.ITwitterAuth): pubg.globalaccounts.TwitterAuth;
            public static encode(message: pubg.globalaccounts.ITwitterAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ITwitterAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.TwitterAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.TwitterAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.TwitterAuth;
            public static toObject(message: pubg.globalaccounts.TwitterAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPlaystationAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            CommunityDomain?: (string|null);
            DateOfBirth?: (string|null);
            Age?: (number|null);
            Language?: (string|null);
            PSNID?: (string|null);
            PSNRegion?: (string|null);
            SubAccount?: (boolean|null);
            ParentalControl?: (pubg.globalaccounts.IPSNParentalControl|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class PlaystationAuth implements IPlaystationAuth {
            constructor(properties?: pubg.globalaccounts.IPlaystationAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public CommunityDomain: string;
            public DateOfBirth: string;
            public Age: number;
            public Language: string;
            public PSNID: string;
            public PSNRegion: string;
            public SubAccount: boolean;
            public ParentalControl?: (pubg.globalaccounts.IPSNParentalControl|null);
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.IPlaystationAuth): pubg.globalaccounts.PlaystationAuth;
            public static encode(message: pubg.globalaccounts.IPlaystationAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPlaystationAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PlaystationAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PlaystationAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PlaystationAuth;
            public static toObject(message: pubg.globalaccounts.PlaystationAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IRedditAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            RedditID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class RedditAuth implements IRedditAuth {
            constructor(properties?: pubg.globalaccounts.IRedditAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public RedditID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.IRedditAuth): pubg.globalaccounts.RedditAuth;
            public static encode(message: pubg.globalaccounts.IRedditAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IRedditAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.RedditAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.RedditAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.RedditAuth;
            public static toObject(message: pubg.globalaccounts.RedditAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IStadiaAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            StadiaID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class StadiaAuth implements IStadiaAuth {
            constructor(properties?: pubg.globalaccounts.IStadiaAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public StadiaID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.IStadiaAuth): pubg.globalaccounts.StadiaAuth;
            public static encode(message: pubg.globalaccounts.IStadiaAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IStadiaAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.StadiaAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.StadiaAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.StadiaAuth;
            public static toObject(message: pubg.globalaccounts.StadiaAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ISteamAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            SteamID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class SteamAuth implements ISteamAuth {
            constructor(properties?: pubg.globalaccounts.ISteamAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public SteamID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.ISteamAuth): pubg.globalaccounts.SteamAuth;
            public static encode(message: pubg.globalaccounts.ISteamAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ISteamAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.SteamAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.SteamAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.SteamAuth;
            public static toObject(message: pubg.globalaccounts.SteamAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IXboxAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            XUID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class XboxAuth implements IXboxAuth {
            constructor(properties?: pubg.globalaccounts.IXboxAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public XUID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.IXboxAuth): pubg.globalaccounts.XboxAuth;
            public static encode(message: pubg.globalaccounts.IXboxAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IXboxAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.XboxAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.XboxAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.XboxAuth;
            public static toObject(message: pubg.globalaccounts.XboxAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IVkAuth {
            GUID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            Email?: (string|null);
            VKID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            ProviderID?: (string|null);
        }

        class VkAuth implements IVkAuth {
            constructor(properties?: pubg.globalaccounts.IVkAuth);
            public GUID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public Email: string;
            public VKID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public ProviderID: string;
            public static create(properties?: pubg.globalaccounts.IVkAuth): pubg.globalaccounts.VkAuth;
            public static encode(message: pubg.globalaccounts.IVkAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IVkAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.VkAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.VkAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.VkAuth;
            public static toObject(message: pubg.globalaccounts.VkAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IDiscordAuth {
            GUID?: (string|null);
            ProviderID?: (string|null);
            DisplayName?: (string|null);
            Deactivated?: (boolean|null);
            Email?: (string|null);
            DiscordID?: (string|null);
            Discriminator?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
        }

        class DiscordAuth implements IDiscordAuth {
            constructor(properties?: pubg.globalaccounts.IDiscordAuth);
            public GUID: string;
            public ProviderID: string;
            public DisplayName: string;
            public Deactivated: boolean;
            public Email: string;
            public DiscordID: string;
            public Discriminator: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public static create(properties?: pubg.globalaccounts.IDiscordAuth): pubg.globalaccounts.DiscordAuth;
            public static encode(message: pubg.globalaccounts.IDiscordAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IDiscordAuth, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.DiscordAuth;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.DiscordAuth;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.DiscordAuth;
            public static toObject(message: pubg.globalaccounts.DiscordAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IProfile {
            GUID?: (string|null);
            ProviderID?: (string|null);
            DisplayName?: (string|null);
            Country?: (string|null);
            DateOfBirth?: (number|Long|null);
            Email?: (string|null);
            EmailOptIn?: (boolean|null);
            ToSAccepted?: (boolean|null);
            EmailOptInUpdatedAt?: (number|Long|null);
            PreferredLanguage?: (string|null);
            Username?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
            CreatorInfo?: (pubg.globalaccounts.ICreatorInfo|null);
            PromoCodes?: ({ [k: string]: string }|null);
        }

        class Profile implements IProfile {
            constructor(properties?: pubg.globalaccounts.IProfile);
            public GUID: string;
            public ProviderID: string;
            public DisplayName: string;
            public Country: string;
            public DateOfBirth: (number|Long);
            public Email: string;
            public EmailOptIn: boolean;
            public ToSAccepted: boolean;
            public EmailOptInUpdatedAt: (number|Long);
            public PreferredLanguage: string;
            public Username: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public CreatorInfo?: (pubg.globalaccounts.ICreatorInfo|null);
            public PromoCodes: { [k: string]: string };
            public static create(properties?: pubg.globalaccounts.IProfile): pubg.globalaccounts.Profile;
            public static encode(message: pubg.globalaccounts.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.Profile;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.Profile;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.Profile;
            public static toObject(message: pubg.globalaccounts.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPrevTwitch {
            ID?: (string|null);
            DisplayName?: (string|null);
        }

        class PrevTwitch implements IPrevTwitch {
            constructor(properties?: pubg.globalaccounts.IPrevTwitch);
            public ID: string;
            public DisplayName: string;
            public static create(properties?: pubg.globalaccounts.IPrevTwitch): pubg.globalaccounts.PrevTwitch;
            public static encode(message: pubg.globalaccounts.IPrevTwitch, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPrevTwitch, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PrevTwitch;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PrevTwitch;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PrevTwitch;
            public static toObject(message: pubg.globalaccounts.PrevTwitch, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICreatorInfo {
            CreatorCode?: (string|null);
            CreatorName?: (string|null);
            UpdatedAt?: (number|Long|null);
        }

        class CreatorInfo implements ICreatorInfo {
            constructor(properties?: pubg.globalaccounts.ICreatorInfo);
            public CreatorCode: string;
            public CreatorName: string;
            public UpdatedAt: (number|Long);
            public static create(properties?: pubg.globalaccounts.ICreatorInfo): pubg.globalaccounts.CreatorInfo;
            public static encode(message: pubg.globalaccounts.ICreatorInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.ICreatorInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.CreatorInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.CreatorInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.CreatorInfo;
            public static toObject(message: pubg.globalaccounts.CreatorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IAccessLog {
            SessionID?: (string|null);
            Timestamp?: (number|Long|null);
            Browser?: (string|null);
            Os?: (string|null);
            Country?: (string|null);
            IP?: (string|null);
            CurrentUser?: (boolean|null);
        }

        class AccessLog implements IAccessLog {
            constructor(properties?: pubg.globalaccounts.IAccessLog);
            public SessionID: string;
            public Timestamp: (number|Long);
            public Browser: string;
            public Os: string;
            public Country: string;
            public IP: string;
            public CurrentUser: boolean;
            public static create(properties?: pubg.globalaccounts.IAccessLog): pubg.globalaccounts.AccessLog;
            public static encode(message: pubg.globalaccounts.IAccessLog, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IAccessLog, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.AccessLog;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.AccessLog;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.AccessLog;
            public static toObject(message: pubg.globalaccounts.AccessLog, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IAccessLogResponse {
            Code?: (pubg.globalaccounts.BackendErrCode|null);
            Message?: (string|null);
            ActivedAccessLogs?: (pubg.globalaccounts.IAccessLog[]|null);
            AccessLogs?: (pubg.globalaccounts.IAccessLog[]|null);
        }

        class AccessLogResponse implements IAccessLogResponse {
            constructor(properties?: pubg.globalaccounts.IAccessLogResponse);
            public Code: pubg.globalaccounts.BackendErrCode;
            public Message: string;
            public ActivedAccessLogs: pubg.globalaccounts.IAccessLog[];
            public AccessLogs: pubg.globalaccounts.IAccessLog[];
            public static create(properties?: pubg.globalaccounts.IAccessLogResponse): pubg.globalaccounts.AccessLogResponse;
            public static encode(message: pubg.globalaccounts.IAccessLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IAccessLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.AccessLogResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.AccessLogResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.AccessLogResponse;
            public static toObject(message: pubg.globalaccounts.AccessLogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPromotionInfo {
            PromotionID?: (string|null);
            Name?: (string|null);
            Description?: (string|null);
            ImageURL?: (string|null);
            LinkURL?: (string|null);
            Remaining?: (number|Long|null);
            Total?: (number|Long|null);
            StartDate?: (number|Long|null);
            EndDate?: (number|Long|null);
            PreGeneratedCodes?: (boolean|null);
            PromotionType?: (string|null);
            ShowCode?: (boolean|null);
        }

        class PromotionInfo implements IPromotionInfo {
            constructor(properties?: pubg.globalaccounts.IPromotionInfo);
            public PromotionID: string;
            public Name: string;
            public Description: string;
            public ImageURL: string;
            public LinkURL: string;
            public Remaining: (number|Long);
            public Total: (number|Long);
            public StartDate: (number|Long);
            public EndDate: (number|Long);
            public PreGeneratedCodes: boolean;
            public PromotionType: string;
            public ShowCode: boolean;
            public static create(properties?: pubg.globalaccounts.IPromotionInfo): pubg.globalaccounts.PromotionInfo;
            public static encode(message: pubg.globalaccounts.IPromotionInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPromotionInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PromotionInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PromotionInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PromotionInfo;
            public static toObject(message: pubg.globalaccounts.PromotionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        enum BackendErrCode {
            ErrAccountByIDNotFound = 0,
            ErrAccountByGUIDNotFound = 1,
            ErrAccountByEmailNotFound = 2,
            ErrAccountByProviderIDNotFound = 3,
            ErrAccountDeactivated = 4,
            ErrAccountActivated = 5,
            ErrAccountOnHold = 6,
            ErrInvalidRefreshToken = 7,
            ErrInvalidActivationToken = 8,
            ErrFailedEmailValidation = 9,
            ErrLocalAuthResetPasswordInvalidOldPassword = 10,
            ErrLocalAuthSetPasswordInvalidFormat = 11,
            ErrCouldNotDeleteAccount = 12,
            ErrFailedUpdateEmailOptIn = 13,
            ErrFailedUpdatePersona = 14,
            ErrInvaildProvider = 15,
            ErrFailedCreateLink = 16,
            ErrFailedDeleteLink = 17,
            ErrCouldnotConvertAuth = 18,
            ErrEmailDomainNotWhitelisted = 19,
            ErrTOSNotAccepted = 20,
            ErrInvalidDOB = 21,
            ErrInvalidEmailConfirm = 22,
            ErrInvalidPassword = 23,
            ErrInvalidPasswordConfirm = 24,
            ErrAccountAlreadyExists = 25,
            ErrIncorrectPassword = 26,
            ErrAccountIsArealdyOnHolded = 27,
            ErrFailedUpdateOnHold = 28,
            ErrFailedUpdateLocked = 29,
            ErrAccountLocked = 30,
            ErrAccountUnconfirmed = 31,
            ErrAccountAlreadyLinked = 32,
            ErrLitePCLauncherRegistrationDisabled = 33,
            ErrInvalidLinkInfo = 34,
            ErrEmailChangeNewEmailSameAsOld = 35,
            ErrEmailChangeNewEmailAlreadyRegistered = 36,
            ErrEmailChangeOldEmailAlreadyChanged = 37,
            ErrEmailChangeInvalidToken = 38,
            ErrPasswordResetInvalidToken = 39,
            ErrLinkInfoMissing = 40,
            ErrProviderAccountNotFound = 41,
            ErrTSLProxyRequestFail = 42,
            ErrTSLPlatformAccountUnmarshalFail = 43,
            ErrTSLPlatformAccountEmptyResponse = 44,
            ErrTSLPlatformAccountSummaryNotFound = 45,
            ErrTSLPlatformAccountSummaryMissingData = 46,
            ErrAccountRecentlyUnlinked = 47,
            ErrTooManyRequestByIp = 48,
            ErrTooManyRequestByLogin = 49,
            ErrTooManyRequestByForgotPassword = 50,
            ErrNoPlatformsLinked = 51,
            ErrInvalidUsername = 52,
            ErrUsernameTaken = 53,
            ErrAccountByUsernameNotFound = 54,
            ErrUsernameAlreadySet = 55,
            ErrInvalidCountry = 56,
            ErrMagicLinkCodeInvalid = 57,
            ErrMagicLinkNotComplete = 58,
            ErrInvalidCreatorCode = 59,
            ErrProviderLocked = 60,
            ErrTooManyRequestByChangeEmail = 61,
            ErrCouldNotGetIpLogs = 62,
            ErrCouldNotGetSessionLogs = 63,
            ErrCreatorCodeRequired = 64,
            ErrPromotionNotFound = 65,
            ErrPromotionNotActive = 66,
            ErrPromotionNoCodesAvailable = 67,
            ErrUnknownEventTypeFromMailjet = 68,
            Success = 200
        }

        interface IPlatformAccount {
            GUID?: (string|null);
            DisplayName?: (string|null);
            PlatformID?: (string|null);
            AuthProviderID?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
        }

        class PlatformAccount implements IPlatformAccount {
            constructor(properties?: pubg.globalaccounts.IPlatformAccount);
            public GUID: string;
            public DisplayName: string;
            public PlatformID: string;
            public AuthProviderID: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public static create(properties?: pubg.globalaccounts.IPlatformAccount): pubg.globalaccounts.PlatformAccount;
            public static encode(message: pubg.globalaccounts.IPlatformAccount, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IPlatformAccount, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.PlatformAccount;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.PlatformAccount;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.PlatformAccount;
            public static toObject(message: pubg.globalaccounts.PlatformAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGameAccount {
            GUID?: (string|null);
            ProviderID?: (string|null);
            PlatformID?: (string|null);
            AuthProvider?: (string|null);
            AuthProviderID?: (string|null);
            DisplayName?: (string|null);
            CreatedAt?: (number|Long|null);
            UpdatedAt?: (number|Long|null);
        }

        class GameAccount implements IGameAccount {
            constructor(properties?: pubg.globalaccounts.IGameAccount);
            public GUID: string;
            public ProviderID: string;
            public PlatformID: string;
            public AuthProvider: string;
            public AuthProviderID: string;
            public DisplayName: string;
            public CreatedAt: (number|Long);
            public UpdatedAt: (number|Long);
            public static create(properties?: pubg.globalaccounts.IGameAccount): pubg.globalaccounts.GameAccount;
            public static encode(message: pubg.globalaccounts.IGameAccount, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: pubg.globalaccounts.IGameAccount, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pubg.globalaccounts.GameAccount;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pubg.globalaccounts.GameAccount;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): pubg.globalaccounts.GameAccount;
            public static toObject(message: pubg.globalaccounts.GameAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}
