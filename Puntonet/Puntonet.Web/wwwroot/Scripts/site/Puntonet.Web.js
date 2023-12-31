﻿var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        class LanguageColumns {
        }
        LanguageColumns.columnsKey = 'Administration.Language';
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        class LanguageForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
            }
        }
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        class RoleColumns {
        }
        RoleColumns.columnsKey = 'Administration.Role';
        Administration.RoleColumns = RoleColumns;
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        class RoleForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0,
                        'RoleKey', w0
                    ]);
                }
            }
        }
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(x => {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(x => {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let TwoFactorAuthType;
        (function (TwoFactorAuthType) {
            TwoFactorAuthType[TwoFactorAuthType["Email"] = 1] = "Email";
            TwoFactorAuthType[TwoFactorAuthType["SMS"] = 2] = "SMS";
        })(TwoFactorAuthType = Administration.TwoFactorAuthType || (Administration.TwoFactorAuthType = {}));
        Serenity.Decorators.registerEnumType(TwoFactorAuthType, 'Puntonet.Administration.TwoFactorAuthType');
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        class UserColumns {
        }
        UserColumns.columnsKey = 'Administration.User';
        Administration.UserColumns = UserColumns;
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        class UserForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailAddressEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.EnumEditor;
                    var w5 = s.ImageUploadEditor;
                    var w6 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'Roles', w2,
                        'MobilePhoneNumber', w0,
                        'MobilePhoneVerified', w3,
                        'TwoFactorAuth', w4,
                        'UserImage', w5,
                        'Password', w6,
                        'PasswordConfirm', w6,
                        'Source', w0
                    ]);
                }
            }
        }
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(x => {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(x => {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Administration;
    (function (Administration) {
        let UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Puntonet.Administration || (Puntonet.Administration = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        class ChangePasswordForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
            }
        }
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        class ForgotPasswordForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailAddressEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
            }
        }
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        class LoginForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
            }
        }
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        class ResetPasswordForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
            }
        }
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        class SignUpForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailAddressEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
            }
        }
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class AccesoriesColumns {
        }
        AccesoriesColumns.columnsKey = 'Parameters.Accesories';
        Parameters.AccesoriesColumns = AccesoriesColumns;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class AccesoriesForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!AccesoriesForm.init) {
                    AccesoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AccesoriesForm, [
                        'Description', w0
                    ]);
                }
            }
        }
        AccesoriesForm.formKey = 'Parameters.Accesories';
        Parameters.AccesoriesForm = AccesoriesForm;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let AccesoriesRow;
        (function (AccesoriesRow) {
            AccesoriesRow.idProperty = 'IdAccesory';
            AccesoriesRow.nameProperty = 'Description';
            AccesoriesRow.localTextPrefix = 'Parameters.Accesories';
            AccesoriesRow.lookupKey = 'Parameters.Accesories';
            function getLookup() {
                return Q.getLookup('Parameters.Accesories');
            }
            AccesoriesRow.getLookup = getLookup;
            AccesoriesRow.deletePermission = 'Administration:General';
            AccesoriesRow.insertPermission = 'Administration:General';
            AccesoriesRow.readPermission = 'Administration:General';
            AccesoriesRow.updatePermission = 'Administration:General';
        })(AccesoriesRow = Parameters.AccesoriesRow || (Parameters.AccesoriesRow = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let AccesoriesService;
        (function (AccesoriesService) {
            AccesoriesService.baseUrl = 'Parameters/Accesories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                AccesoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AccesoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AccesoriesService = Parameters.AccesoriesService || (Parameters.AccesoriesService = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class AtributtesColumns {
        }
        AtributtesColumns.columnsKey = 'Parameters.Atributtes';
        Parameters.AtributtesColumns = AtributtesColumns;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class AtributtesForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!AtributtesForm.init) {
                    AtributtesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AtributtesForm, [
                        'Description', w0
                    ]);
                }
            }
        }
        AtributtesForm.formKey = 'Parameters.Atributtes';
        Parameters.AtributtesForm = AtributtesForm;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let AtributtesRow;
        (function (AtributtesRow) {
            AtributtesRow.idProperty = 'IdAtributte';
            AtributtesRow.nameProperty = 'Description';
            AtributtesRow.localTextPrefix = 'Parameters.Atributtes';
            AtributtesRow.lookupKey = 'Parameters.Atributtes';
            function getLookup() {
                return Q.getLookup('Parameters.Atributtes');
            }
            AtributtesRow.getLookup = getLookup;
            AtributtesRow.deletePermission = 'Administration:General';
            AtributtesRow.insertPermission = 'Administration:General';
            AtributtesRow.readPermission = 'Administration:General';
            AtributtesRow.updatePermission = 'Administration:General';
        })(AtributtesRow = Parameters.AtributtesRow || (Parameters.AtributtesRow = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let AtributtesService;
        (function (AtributtesService) {
            AtributtesService.baseUrl = 'Parameters/Atributtes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                AtributtesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AtributtesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AtributtesService = Parameters.AtributtesService || (Parameters.AtributtesService = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class ClothesColumns {
        }
        ClothesColumns.columnsKey = 'Parameters.Clothes';
        Parameters.ClothesColumns = ClothesColumns;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class ClothesForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!ClothesForm.init) {
                    ClothesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(ClothesForm, [
                        'Description', w0,
                        'IdColor', w1
                    ]);
                }
            }
        }
        ClothesForm.formKey = 'Parameters.Clothes';
        Parameters.ClothesForm = ClothesForm;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let ClothesRow;
        (function (ClothesRow) {
            ClothesRow.idProperty = 'IdClothe';
            ClothesRow.nameProperty = 'ClotheColor';
            ClothesRow.localTextPrefix = 'Parameters.Clothes';
            ClothesRow.lookupKey = 'Parameters.Clothes';
            function getLookup() {
                return Q.getLookup('Parameters.Clothes');
            }
            ClothesRow.getLookup = getLookup;
            ClothesRow.deletePermission = 'Administration:General';
            ClothesRow.insertPermission = 'Administration:General';
            ClothesRow.readPermission = 'Administration:General';
            ClothesRow.updatePermission = 'Administration:General';
        })(ClothesRow = Parameters.ClothesRow || (Parameters.ClothesRow = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let ClothesService;
        (function (ClothesService) {
            ClothesService.baseUrl = 'Parameters/Clothes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                ClothesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ClothesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ClothesService = Parameters.ClothesService || (Parameters.ClothesService = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class ColorsColumns {
        }
        ColorsColumns.columnsKey = 'Parameters.Colors';
        Parameters.ColorsColumns = ColorsColumns;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class ColorsForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!ColorsForm.init) {
                    ColorsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ColorsForm, [
                        'Description', w0
                    ]);
                }
            }
        }
        ColorsForm.formKey = 'Parameters.Colors';
        Parameters.ColorsForm = ColorsForm;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let ColorsRow;
        (function (ColorsRow) {
            ColorsRow.idProperty = 'IdColor';
            ColorsRow.nameProperty = 'Description';
            ColorsRow.localTextPrefix = 'Parameters.Colors';
            ColorsRow.lookupKey = 'Parameters.Colors';
            function getLookup() {
                return Q.getLookup('Parameters.Colors');
            }
            ColorsRow.getLookup = getLookup;
            ColorsRow.deletePermission = 'Administration:General';
            ColorsRow.insertPermission = 'Administration:General';
            ColorsRow.readPermission = 'Administration:General';
            ColorsRow.updatePermission = 'Administration:General';
        })(ColorsRow = Parameters.ColorsRow || (Parameters.ColorsRow = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let ColorsService;
        (function (ColorsService) {
            ColorsService.baseUrl = 'Parameters/Colors';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                ColorsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ColorsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ColorsService = Parameters.ColorsService || (Parameters.ColorsService = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class PersonAccesoriesColumns {
        }
        PersonAccesoriesColumns.columnsKey = 'Parameters.PersonAccesories';
        Parameters.PersonAccesoriesColumns = PersonAccesoriesColumns;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class PersonAccesoriesForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!PersonAccesoriesForm.init) {
                    PersonAccesoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(PersonAccesoriesForm, [
                        'IdPerson', w0,
                        'IdAccesory', w0
                    ]);
                }
            }
        }
        PersonAccesoriesForm.formKey = 'Parameters.PersonAccesories';
        Parameters.PersonAccesoriesForm = PersonAccesoriesForm;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let PersonAccesoriesRow;
        (function (PersonAccesoriesRow) {
            PersonAccesoriesRow.idProperty = 'IdPersonAccesory';
            PersonAccesoriesRow.localTextPrefix = 'Parameters.PersonAccesories';
            PersonAccesoriesRow.deletePermission = 'Administration:General';
            PersonAccesoriesRow.insertPermission = 'Administration:General';
            PersonAccesoriesRow.readPermission = 'Administration:General';
            PersonAccesoriesRow.updatePermission = 'Administration:General';
        })(PersonAccesoriesRow = Parameters.PersonAccesoriesRow || (Parameters.PersonAccesoriesRow = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let PersonAccesoriesService;
        (function (PersonAccesoriesService) {
            PersonAccesoriesService.baseUrl = 'Parameters/PersonAccesories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                PersonAccesoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonAccesoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonAccesoriesService = Parameters.PersonAccesoriesService || (Parameters.PersonAccesoriesService = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class PersonAtributtesColumns {
        }
        PersonAtributtesColumns.columnsKey = 'Parameters.PersonAtributtes';
        Parameters.PersonAtributtesColumns = PersonAtributtesColumns;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class PersonAtributtesForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!PersonAtributtesForm.init) {
                    PersonAtributtesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(PersonAtributtesForm, [
                        'IdAtributte', w0,
                        'Value', w1
                    ]);
                }
            }
        }
        PersonAtributtesForm.formKey = 'Parameters.PersonAtributtes';
        Parameters.PersonAtributtesForm = PersonAtributtesForm;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let PersonAtributtesRow;
        (function (PersonAtributtesRow) {
            PersonAtributtesRow.idProperty = 'IdPersonAtributte';
            PersonAtributtesRow.nameProperty = 'Value';
            PersonAtributtesRow.localTextPrefix = 'Parameters.PersonAtributtes';
            PersonAtributtesRow.deletePermission = 'Administration:General';
            PersonAtributtesRow.insertPermission = 'Administration:General';
            PersonAtributtesRow.readPermission = 'Administration:General';
            PersonAtributtesRow.updatePermission = 'Administration:General';
        })(PersonAtributtesRow = Parameters.PersonAtributtesRow || (Parameters.PersonAtributtesRow = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let PersonAtributtesService;
        (function (PersonAtributtesService) {
            PersonAtributtesService.baseUrl = 'Parameters/PersonAtributtes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                PersonAtributtesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonAtributtesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonAtributtesService = Parameters.PersonAtributtesService || (Parameters.PersonAtributtesService = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class PersonClothesColumns {
        }
        PersonClothesColumns.columnsKey = 'Parameters.PersonClothes';
        Parameters.PersonClothesColumns = PersonClothesColumns;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        class PersonClothesForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!PersonClothesForm.init) {
                    PersonClothesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(PersonClothesForm, [
                        'IdClothe', w0
                    ]);
                }
            }
        }
        PersonClothesForm.formKey = 'Parameters.PersonClothes';
        Parameters.PersonClothesForm = PersonClothesForm;
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let PersonClothesRow;
        (function (PersonClothesRow) {
            PersonClothesRow.idProperty = 'IdPersonClothe';
            PersonClothesRow.localTextPrefix = 'Parameters.PersonClothes';
            PersonClothesRow.deletePermission = 'Administration:General';
            PersonClothesRow.insertPermission = 'Administration:General';
            PersonClothesRow.readPermission = 'Administration:General';
            PersonClothesRow.updatePermission = 'Administration:General';
        })(PersonClothesRow = Parameters.PersonClothesRow || (Parameters.PersonClothesRow = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Parameters;
    (function (Parameters) {
        let PersonClothesService;
        (function (PersonClothesService) {
            PersonClothesService.baseUrl = 'Parameters/PersonClothes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                PersonClothesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonClothesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonClothesService = Parameters.PersonClothesService || (Parameters.PersonClothesService = {}));
    })(Parameters = Puntonet.Parameters || (Puntonet.Parameters = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Persons;
    (function (Persons) {
        class PersonsColumns {
        }
        PersonsColumns.columnsKey = 'Persons.Persons';
        Persons.PersonsColumns = PersonsColumns;
    })(Persons = Puntonet.Persons || (Puntonet.Persons = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Persons;
    (function (Persons) {
        class PersonsForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!PersonsForm.init) {
                    PersonsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.Widget;
                    Q.initFormType(PersonsForm, [
                        'Name', w0,
                        'Address', w0,
                        'Phone', w0,
                        'Identity', w0,
                        'Gender', w1,
                        'Photo', w0,
                        'AccesoriList', w2,
                        'ClothesList', w3,
                        'Atributtes', w3
                    ]);
                }
            }
        }
        PersonsForm.formKey = 'Persons.Persons';
        Persons.PersonsForm = PersonsForm;
    })(Persons = Puntonet.Persons || (Puntonet.Persons = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Persons;
    (function (Persons) {
        let PersonsRow;
        (function (PersonsRow) {
            PersonsRow.idProperty = 'IdPerson';
            PersonsRow.nameProperty = 'Name';
            PersonsRow.localTextPrefix = 'Persons.Persons';
            PersonsRow.lookupKey = 'Persons.Persons';
            function getLookup() {
                return Q.getLookup('Persons.Persons');
            }
            PersonsRow.getLookup = getLookup;
            PersonsRow.deletePermission = 'Administration:General';
            PersonsRow.insertPermission = 'Administration:General';
            PersonsRow.readPermission = 'Administration:General';
            PersonsRow.updatePermission = 'Administration:General';
        })(PersonsRow = Persons.PersonsRow || (Persons.PersonsRow = {}));
    })(Persons = Puntonet.Persons || (Puntonet.Persons = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Persons;
    (function (Persons) {
        let PersonsService;
        (function (PersonsService) {
            PersonsService.baseUrl = 'Persons/Persons';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                PersonsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonsService = Persons.PersonsService || (Persons.PersonsService = {}));
    })(Persons = Puntonet.Persons || (Puntonet.Persons = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Texts;
    (function (Texts) {
        Puntonet['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleKey: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, ImpersonationToken: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, MobilePhoneNumber: 1, MobilePhoneVerified: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Roles: 1, Source: 1, TwoFactorAuth: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Parameters: { Accesories: { Description: 1, IdAccesory: 1 }, Atributtes: { Description: 1, IdAtributte: 1 }, Clothes: { ClotheColor: 1, Description: 1, IdClothe: 1, IdColor: 1, IdColorDescription: 1 }, Colors: { Description: 1, IdColor: 1 }, PersonAccesories: { IdAccesory: 1, IdAccesoryDescription: 1, IdPerson: 1, IdPersonAccesory: 1, IdPersonAddress: 1, IdPersonIdentity: 1, IdPersonName: 1, IdPersonPhone: 1, IdPersonPhoto: 1 }, PersonAtributtes: { IdAtributte: 1, IdAtributteDescription: 1, IdPerson: 1, IdPersonAddress: 1, IdPersonAtributte: 1, IdPersonIdentity: 1, IdPersonName: 1, IdPersonPhone: 1, IdPersonPhoto: 1, Value: 1 }, PersonClothes: { IdClothe: 1, IdClotheDescription: 1, IdClotheIdColor: 1, IdColorDescription: 1, IdPerson: 1, IdPersonAddress: 1, IdPersonClothe: 1, IdPersonIdentity: 1, IdPersonName: 1, IdPersonPhone: 1, IdPersonPhoto: 1 } }, Persons: { Persons: { AccesoriList: 1, Address: 1, Atributtes: 1, ClothesList: 1, Gender: 1, IdPerson: 1, Identity: 1, Name: 1, Phone: 1, Photo: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Dialogs: { PendingChangesConfirmation: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeAzure: 1, ThemeAzureLight: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeCosmos: 1, ThemeCosmosLight: 1, ThemeGlassy: 1, ThemeGlassyLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Puntonet.Texts || (Puntonet.Texts = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Persons;
            (function (Persons_1) {
                var Persons;
                (function (Persons) {
                    let Gender;
                    (function (Gender) {
                        Gender[Gender["Male"] = 1] = "Male";
                        Gender[Gender["Female"] = 2] = "Female";
                    })(Gender = Persons.Gender || (Persons.Gender = {}));
                    Serenity.Decorators.registerEnumType(Gender, 'Puntonet.Web.Modules.Persons.Persons.Gender', 'Persons.Persons.Gender');
                })(Persons = Persons_1.Persons || (Persons_1.Persons = {}));
            })(Persons = Modules.Persons || (Modules.Persons = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = Puntonet.Web || (Puntonet.Web = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var k of Puntonet.Administration.LanguageRow.getLookup().items) {
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Puntonet.LanguageList || (Puntonet.LanguageList = {}));
})(Puntonet || (Puntonet = {}));
/// <reference path="LanguageList.ts" />
var Puntonet;
(function (Puntonet) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Puntonet');
        Serenity.EntityDialog.defaultLanguageList = Puntonet.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        Serenity.setupUIOverrides();
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
        $(() => {
            // let demo page use its own settings for idle timeout
            if (window.location.pathname.indexOf('Samples/IdleTimeout') > 0)
                return;
            var meta = $('meta[name=username]');
            if ((meta.length && meta.attr('content')) ||
                (!meta.length && Q.Authorization.isLoggedIn)) {
                new Serenity.IdleTimeout({
                    activityTimeout: 15 * 60,
                    warningDuration: 2 * 60
                });
            }
        });
    })(ScriptInitialization = Puntonet.ScriptInitialization || (Puntonet.ScriptInitialization = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        let ChangePasswordPanel = class ChangePasswordPanel extends Serenity.PropertyPanel {
            getFormKey() { return Membership.ChangePasswordForm.formKey; }
            constructor(container) {
                super(container);
                this.form = new Membership.ChangePasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.ConfirmPassword.value !== this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    var request = this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: response => {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), () => {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            getTemplate() {
                return `<div class="s-Panel">
    <h3 class="page-title mb-4 text-center">${Q.text("Forms.Membership.ChangePassword.FormTitle")}</h3>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <div class="px-field mt-4">
            <button id="~_SubmitButton" type="submit" class="btn btn-primary w-100">
                ${Q.text("Forms.Membership.ChangePassword.SubmitButton")}
            </button>
        </div>
    </form>
</div>`;
            }
        };
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        let ForgotPasswordPanel = class ForgotPasswordPanel extends Serenity.PropertyPanel {
            getFormKey() { return Membership.ForgotPasswordForm.formKey; }
            constructor(container) {
                super(container);
                this.form = new Membership.ForgotPasswordForm(this.idPrefix);
                this.byId('SubmitButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    var request = this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: response => {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), () => {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
        };
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        let LoginPanel = class LoginPanel extends Serenity.PropertyPanel {
            getFormKey() { return Membership.LoginForm.formKey; }
            constructor(container) {
                super(container);
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                this.byId('LoginButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    var request = this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: response => {
                            this.redirectToReturnUrl();
                        },
                        onError: (response) => {
                            if (response != null && response.Error != null && response.Error.Code == "TwoFactorAuthenticationRequired") {
                                var args = response.Error.Arguments.split('|');
                                this.handleTwoFactorAuthentication(request.Username, request.Password, args[1], args[0]);
                                return;
                            }
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
            }
            redirectToReturnUrl() {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            }
            handleTwoFactorAuthentication(user, pass, twoFactorGuid, info) {
                var tries = 0;
                var remaining = 120;
                var dialog = null;
                var showDialog = () => {
                    dialog = new Serenity.Extensions.PromptDialog({
                        title: "Two Factor Authentication",
                        editorOptions: {
                            maxLength: 4,
                        },
                        editorType: "Integer",
                        message: info,
                        isHtml: true,
                        required: true,
                        validateValue: (x) => {
                            if (x >= 1000 && x <= 9999) {
                                tries++;
                                Q.serviceCall({
                                    url: Q.resolveUrl('~/Account/Login'),
                                    request: {
                                        Username: user,
                                        Password: pass,
                                        TwoFactorGuid: twoFactorGuid,
                                        TwoFactorCode: x
                                    },
                                    onSuccess: (r) => {
                                        this.redirectToReturnUrl();
                                        return;
                                    },
                                    onError: (z) => {
                                        Q.notifyError(z.Error.Message);
                                        if (tries > 2) {
                                            Q.notifyError("Code entered is invalid! You can't try more than 3 times!");
                                            dialog = null;
                                            return;
                                        }
                                        showDialog();
                                    }
                                });
                                return true;
                            }
                            Q.notifyError("Please enter a valid code!");
                            return false;
                        }
                    });
                    dialog.dialogOpen();
                    dialog.element.on("dialogclose.me", function (x) {
                        if (dialog != null) {
                            dialog.element.off("dialogclose.me");
                            dialog = null;
                        }
                    });
                };
                function updateCounter() {
                    remaining -= 1;
                    if (dialog != null) {
                        dialog.element.find("span.counter").text(remaining.toString());
                    }
                    if (remaining >= 0)
                        setTimeout(updateCounter, 1000);
                    else if (dialog != null)
                        dialog.dialogClose();
                }
                ;
                showDialog();
                window.setTimeout(updateCounter, 1000);
            }
            getTemplate() {
                return `
    <h2 class="text-center p-4">
        <img src="${Q.resolveUrl("~/Content/site/images/serenity-logo-w-128.png")}"
            class="rounded-circle p-1" style="background-color: var(--s-sidebar-band-bg)"
            width="50" height="50" /> Puntonet
    </h2>

    <div class="s-Panel p-4">
        <h5 class="text-center my-4">${Q.text("Forms.Membership.Login.LoginToYourAccount")}</h5>
        <form id="~_Form" action="">
            <div id="~_PropertyGrid"></div>
            <div class="px-field">
                <a class="float-end text-decoration-none" href="${Q.resolveUrl('~/Account/ForgotPassword')}">
                    ${Q.text("Forms.Membership.Login.ForgotPassword")}
                </a>
            </div>
            <div class="px-field">
                <button id="~_LoginButton" type="submit" class="btn btn-primary my-3 w-100">
                    ${Q.text("Forms.Membership.Login.SignInButton")}
                </button>
            </div>
        </form>
    </div>

    <div class="text-center mt-2">
        <a class="text-decoration-none" href="${Q.resolveUrl('~/Account/SignUp')}">${Q.text("Forms.Membership.Login.SignUpButton")}</a>
    </div>   
`;
            }
        };
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        let ResetPasswordPanel = class ResetPasswordPanel extends Serenity.PropertyPanel {
            getFormKey() { return Membership.ResetPasswordForm.formKey; }
            constructor(container) {
                super(container);
                this.form = new Membership.ResetPasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.ConfirmPassword.value !== this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    var request = this.getSaveEntity();
                    request.Token = this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: response => {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), () => {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
            }
        };
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
var Puntonet;
(function (Puntonet) {
    var Membership;
    (function (Membership) {
        let SignUpPanel = class SignUpPanel extends Serenity.PropertyPanel {
            getFormKey() { return Membership.SignUpForm.formKey; }
            constructor(container) {
                super(container);
                this.form = new Membership.SignUpForm(this.idPrefix);
                this.form.ConfirmEmail.addValidationRule(this.uniqueName, e => {
                    if (this.form.ConfirmEmail.value !== this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.ConfirmPassword.value !== this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: this.form.DisplayName.value,
                            Email: this.form.Email.value,
                            Password: this.form.Password.value
                        },
                        onSuccess: response => {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), () => {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
        };
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Puntonet.Membership || (Puntonet.Membership = {}));
})(Puntonet || (Puntonet = {}));
//# sourceMappingURL=Puntonet.Web.js.map