var Intl = {
	locales: ["fr-FR"],

	formats: {
        date: {
            short: {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        },
        time: {
            hhmm: {
                hour: "numeric",
                minute: "numeric"
            }
        }
	},

	messages: {
		site: {
			TITLE: "Cocorico"
		},

		route: {
			SIGN_IN: "/connexion",
			PRIVACY_POLICY: "/politique-de-confidentialite",
			POLL: "/vote",
			MY_TEXTS: "/mes-textes",
			CREATE_TEXT: "/texte/nouveau",
			VIEW_TEXT: "/texte",
			EDIT_TEXT: "/texte/modifier",
			DELETE_TEXT: "/texte/supprimer"
		},

		login: {
			USERNAME: "Utilisateur",
			PASSWORD: "Mot de passe",
			FORGOTTEN_PASSWORD: "Mot de passe oublié",
			SIGN_IN: "Se Connecter",
			SIGN_OUT: "Se Déconnecter",
			SIGN_UP: "Créer un compte",
			REQUIRE_LOGIN: "Vous devez être connecté pour accéder à cette page."
		},

		footer: {
			PRIVACY_POLICY: "Politique de Confidentialité",
			SOURCE_CODE: "Code Source"
		},

		page: {
			myTexts : {
				TITLE: "Mes Textes",
				NO_TEXT: "Aucun texte.",
				NEW_TEXT: 'Créer un texte'
			},

			createText: {
				TITLE: "Créer un nouveau texte"
			}
		},

		text: {
			TEXTS: 'Textes',
			VOTE_YES: 'pour',
			VOTE_BLANK: 'blanc',
			VOTE_NO: 'contre',
			VOTE: 'je vote { value }',
			UNVOTE: 'retirer mon vote',
			ALREADY_VOTED: 'Vous avez voté \'{ value }\' le { date }.',
			LOGIN_REQUIRED: 'Vous devez être connecté pour voter.',
			ADDITIONAL_DATA: 'Données Additionnelles',
			YOUR_VOTE: 'Votre Vote',
			NO_PROPOSAL: 'Aucune proposition.',
			ADD_PROPOSAL: 'Faire une proposition',
			ADD_PROPOSAL_LOGIN: 'Vous devez être connecté pour faire une proposition.',
			NO_ARGUMENT: 'Aucun argument.',
			ADD_ARGUMENT: 'Ajouter un argument \'{ value }\'',
			ADD_ARGUMENT_LOGIN: 'Vous devez être connecté pour proposer un argument.',
			TEXT_SOURCES: 'Sources mentionnées dans le texte',
			COMMUNITY_SOURCES: 'Sources ajoutées par la communauté',
			NO_SOURCE: 'Aucune source.',
			ADD_SOURCE_BUTTON: 'Ajouter une source',
			ADD_SOURCE_FORM_TITLE: 'Ajouter une source',
			ADD_SOURCE_LOGIN: 'Vous devez être connecté pour proposer une source.',
			ADD_SOURCE_URL_HINT: 'Adresse Web de la source que vous désirez ajouter :',
			ADD_SOURCE_SUBMIT_BUTTON: 'Ajouter'
		},

		textEditor: {
			SAVE: 'Enregistrer',
			TITLE: 'Titre',
			TITLE_PLACEHOLDER: 'le titre de votre texte',
			CONTENT: 'Texte',
			CONTENT_PLACEHOLDER: 'le contenu de votre texte'
		},

		error : {
			ERROR_404: 'Oops... nous n\'avons pas pu trouver la page que vous cherchez !',
			ERROR_SOURCE_ALREADY_EXISTS: 'Cette source a déjà été ajoutée.'
		}
	}
}

module.exports = Intl;
