package identity

func (sr *StatusResponse) TraceTags() map[string]interface{} {
	if sr == nil {
		return nil
	}

	return map[string]interface{}{
		"code":    sr.Code,
		"error":   sr.Error,
		"message": sr.Message,
	}
}

func (gar *GlobalAccountResponse) TraceTags() map[string]interface{} {
	if gar == nil {
		return nil
	}

	return map[string]interface{}{
		"code":    gar.Code,
		"message": gar.Message,
		"account": gar.Account.TraceTags(),
	}
}

func (ga *GlobalAccount) TraceTags() map[string]interface{} {
	if ga == nil {
		return nil
	}

	return map[string]interface{}{
		"guid":         ga.GUID,
		"persona":      ga.PersonaPlatform,
		"activated":    ga.Activated,
		"email_opt_in": ga.EmailOptIn,
		// TODO: Auths and Platforms
	}
}

func (gar *GPPAccountResponse) TraceTags() map[string]interface{} {
	if gar == nil {
		return nil
	}

	return map[string]interface{}{
		"code":    gar.Code,
		"message": gar.Message,
		"account": gar.Account.TraceTags(),
	}
}
