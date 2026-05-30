// ===== TEAM LIRA - TRANSLATIONS (i18n) =====
// Suporte: Português (pt), English (en), Español (es)

const TRANSLATIONS = {
  pt: {
    // ===== GERAL =====
    appName: 'Team Lira',
    loading: 'CARREGANDO...',

    // ===== LOGIN =====
    loginTitle: 'Entrar no',
    loginName: 'Seu nome',
    loginCode: 'Código de convite',
    loginBtn: 'Entrar',
    loginAdmin: 'Sou admin',
    loginAdminBtn: 'Acessar painel',

    // ===== NAVEGAÇÃO =====
    navRanking: 'Ranking',
    navBadges: 'Conquistas',
    navFeed: 'Feed',
    navProfile: 'Perfil',
    navLogout: 'Sair',

    // ===== DASHBOARD =====
    dashStreak: 'dias seguidos',
    dashPoints: 'pontos',
    dashTrainings: '💪 Treinos',
    dashRanking: '🏆 Ranking',
    dashMission: '⚡ Missão do dia',
    dashMissionDone: '✅ Missão concluída',
    dashStoriesTitle: '📸 Treinos de hoje',
    dashCheckin: 'Check-in de hoje',

    // ===== CHECK-IN =====
    checkinTreino: 'Treino concluído',
    checkinCardio: 'Cardio do dia',
    checkinCafe: 'Café da manhã seguido',
    checkinLanche: 'Lanche da tarde seguido',
    checkinAlmoco: 'Almoço seguido',
    checkinJantar: 'Jantar seguido',
    checkinHidra: 'Hidratação do dia',
    checkinFrutas: 'Frutas/Vegetais do dia',
    pts: 'pontos',

    // ===== RANKING =====
    rankingTitle: '🏆 Ranking',
    rankingMonthly: '📅 Mensal',
    rankingTotal: '🏆 Geral',
    rankingHallOfFame: '👑 Hall da Fama',
    rankingNoData: 'Nenhum dado ainda.',
    rankingPosition: '#',
    rankingPoints: 'pts',

    // ===== BADGES =====
    badgesTitle: '🎖️ Conquistas',
    badgeCategories: {
      treino: '💪 Treino',
      streak: '🔥 Sequência',
      meal: '🍽️ Alimentação',
      weight: '⚖️ Peso',
      points: '👑 Pontuação',
      ranking: '🏆 Ranking',
      hydra: '💧 Hidratação',
      engage: '📸 Engajamento',
    },

    // ===== PERFIL =====
    profileTitle: 'Meu Perfil',
    profileLevel: 'Nível',
    profileBadges: 'Conquistas',
    profileTrainings: 'Treinos realizados',
    profileStreak: 'Melhor sequência',
    profileChangePhoto: 'Alterar foto',
    profileLogout: 'Sair da conta',
    profileWeight: 'Peso atual (kg)',
    profileWeightGoal: 'Meta de peso',
    profileWeightSave: 'Salvar meta',
    profileWeightHistory: 'Histórico',

    // ===== FEED =====
    feedTitle: '💬 Feed do Time',
    feedNoData: 'Nenhuma atividade ainda.',
    feedPostPhoto: 'Postar foto de treino',
    feedSendMsg: 'Enviar mensagem',
    feedPlaceholder: 'Escreva algo...',
    feedAdmin: '✉️ Mensagem do professor!',

    // ===== TOASTS =====
    toastCheckinDone: '+{pts} pontos! 🔥',
    toastCheckinAlready: 'Já registrado hoje!',
    toastCheckinError: 'Erro ao registrar. Tente novamente.',
    toastWeightSaved: 'Peso registrado! ⚖️',
    toastWeightInvalid: 'Peso inválido',
    toastGoalSaved: 'Meta salva! 🎯',
    toastGoalInvalid: 'Meta inválida',
    toastPhotoUpdated: 'Foto atualizada! 📸',
    toastPhotoError: 'Erro ao enviar foto. Tente novamente.',
    toastPhotoTooBig: 'Foto muito grande! Máximo 10MB',
    toastStoryPosted: 'Treino postado! 💪🔥',
    toastStoryError: 'Erro ao postar. Tente novamente.',
    toastMsgSent: 'Mensagem enviada! ✉️',
    toastMsgEmpty: 'Digite uma mensagem!',
    toastMsgDeleted: 'Mensagem apagada!',
    toastMsgError: 'Erro ao enviar.',
    toastCodeCopied: 'Código copiado! 📋',
    toastCodeTooShort: 'Código muito curto!',
    toastCodeUpdated: 'Código atualizado! ✅',
    toastStudentApproved: 'Aluno aprovado! ✅',
    toastStudentBlocked: 'Aluno bloqueado 🚫',
    toastStudentUnblocked: 'Aluno desbloqueado ✅',
    toastMonthReset: '✅ Mês zerado com sucesso!',
    toastMonthResetError: 'Erro ao zerar mês: ',
    toastHallSaved: '✅ Hall of Fame salvo com fotos!',
    toastHallError: 'Erro: ',
    toastOrderSaved: '✅ Ordem salva!',
    toastOrderError: 'Erro: ',
    toastSelectStudents: 'Selecione pelo menos 1 aluno',
    toastPhraseUpdated: 'Frase do dia atualizada! 💬',
    toastPhraseAuto: 'Usando frase automática!',
    toastSending: 'Enviando foto... ⏳',
    toastSaved: '✅ Salvo com sucesso!',

    // ===== CONTA / CONFIGURAÇÕES =====
    toastNameTooShort: 'Nome muito curto!',
    toastNameUpdated: 'Nome atualizado! ✅',
    toastNameError: 'Erro ao atualizar nome.',
    toastEmailEmpty: 'Digite o novo e-mail!',
    toastPasswordRequired: 'Digite sua senha atual!',
    toastEmailUpdated: 'E-mail atualizado! ✅',
    toastPasswordWrong: 'Senha incorreta!',
    toastEmailInUse: 'E-mail já em uso!',
    toastEmailInvalid: 'E-mail inválido!',
    toastEmailError: 'Erro ao atualizar e-mail.',
    toastPasswordTooShort: 'Nova senha precisa ter mínimo 6 caracteres!',
    toastPasswordUpdated: 'Senha atualizada! ✅',
    toastPasswordError: 'Erro ao atualizar senha.',

    // ===== ADMIN =====
    adminRanking: '🏆 Ranking',
    adminWeekly: '📅 Semanal',
    adminFeed: '💬 Feed',
    adminChat: '🗨️ Chat',
    adminMsgs: '✉️ Mensagens',
    adminSearch: '🔍 Buscar aluno...',
    adminAll: 'Todos',
    adminActive: '✅ Ativos',
    adminPending: '⏳ Pendentes',
    adminBlocked: '🚫 Bloqueados',
    adminInactive: '😴 Sumidos',
    adminTrainingsToday: 'Treinos hoje',
    adminRankingFull: '🏆 Ranking completo',
    adminRefresh: '↻ Atualizar',
    adminInviteCode: 'Código de convite:',
    adminCopyCode: 'Copiar',
    adminEditCode: 'Alterar',
    adminSaveCode: 'Salvar',
    adminApprove: 'Aprovar',
    adminBlock: 'Bloquear',
    adminUnblock: 'Desbloquear',
    adminWeeklyReport: '📅 Relatório Semanal',
    adminFeedTitle: '💬 Feed do Time',
    adminChatTitle: '🗨️ Chat ao Vivo',
    adminResetMonth: 'Zerar mês',
    adminHallOfFame: 'Hall of Fame',
    adminSaveOrder: '✅ Ordem salva!',

    // ===== CELEBRAÇÃO =====
    celebrationTraining: 'Treino Concluído!',
    celebrationBadge: 'Nova Conquista!',
    celebrationLevelUp: 'Subiu de Nível!',
    celebrationContinue: 'Continue assim!',

    // ===== MISSÃO =====
    missionComplete: 'Missão Concluída! ✅',
    missionBtn: 'Concluir Missão',
    missionBtnDone: '✅ Concluída',

    // ===== STORIES =====
    storyNoPhotos: 'Nenhuma foto hoje ainda.',
    storyPostBtn: '📸 Postar meu treino',

    // ===== ERROS =====
    errorGeneral: 'Erro. Tente novamente.',
    errorNetwork: 'Erro de conexão.',
    errorLogin: 'Código inválido ou nome não encontrado.',
    errorPending: 'Conta pendente de aprovação.',
    errorBlocked: 'Conta bloqueada. Contate o professor.',
  },

  en: {
    // ===== GENERAL =====
    appName: 'Team Lira',
    loading: 'LOADING...',

    // ===== LOGIN =====
    loginTitle: 'Sign in to',
    loginName: 'Your name',
    loginCode: 'Invite code',
    loginBtn: 'Sign In',
    loginAdmin: "I'm an admin",
    loginAdminBtn: 'Access panel',

    // ===== NAVIGATION =====
    navRanking: 'Ranking',
    navBadges: 'Achievements',
    navFeed: 'Feed',
    navProfile: 'Profile',
    navLogout: 'Sign Out',

    // ===== DASHBOARD =====
    dashStreak: 'day streak',
    dashPoints: 'points',
    dashTrainings: '💪 Workouts',
    dashRanking: '🏆 Ranking',
    dashMission: '⚡ Daily Mission',
    dashMissionDone: '✅ Mission completed',
    dashStoriesTitle: "📸 Today's workouts",
    dashCheckin: "Today's check-in",

    // ===== CHECK-IN =====
    checkinTreino: 'Workout done',
    checkinCardio: 'Daily cardio',
    checkinCafe: 'Breakfast followed',
    checkinLanche: 'Afternoon snack followed',
    checkinAlmoco: 'Lunch followed',
    checkinJantar: 'Dinner followed',
    checkinHidra: 'Daily hydration',
    checkinFrutas: 'Fruits/Vegetables today',
    pts: 'points',

    // ===== RANKING =====
    rankingTitle: '🏆 Ranking',
    rankingMonthly: '📅 Monthly',
    rankingTotal: '🏆 Overall',
    rankingHallOfFame: '👑 Hall of Fame',
    rankingNoData: 'No data yet.',
    rankingPosition: '#',
    rankingPoints: 'pts',

    // ===== BADGES =====
    badgesTitle: '🎖️ Achievements',
    badgeCategories: {
      treino: '💪 Workout',
      streak: '🔥 Streak',
      meal: '🍽️ Nutrition',
      weight: '⚖️ Weight',
      points: '👑 Points',
      ranking: '🏆 Ranking',
      hydra: '💧 Hydration',
      engage: '📸 Engagement',
    },

    // ===== PROFILE =====
    profileTitle: 'My Profile',
    profileLevel: 'Level',
    profileBadges: 'Achievements',
    profileTrainings: 'Workouts completed',
    profileStreak: 'Best streak',
    profileChangePhoto: 'Change photo',
    profileLogout: 'Sign out',
    profileWeight: 'Current weight (kg)',
    profileWeightGoal: 'Weight goal',
    profileWeightSave: 'Save goal',
    profileWeightHistory: 'History',

    // ===== FEED =====
    feedTitle: '💬 Team Feed',
    feedNoData: 'No activity yet.',
    feedPostPhoto: 'Post workout photo',
    feedSendMsg: 'Send message',
    feedPlaceholder: 'Write something...',
    feedAdmin: "✉️ Coach's message!",

    // ===== TOASTS =====
    toastCheckinDone: '+{pts} points! 🔥',
    toastCheckinAlready: 'Already logged today!',
    toastCheckinError: 'Error logging. Try again.',
    toastWeightSaved: 'Weight saved! ⚖️',
    toastWeightInvalid: 'Invalid weight',
    toastGoalSaved: 'Goal saved! 🎯',
    toastGoalInvalid: 'Invalid goal',
    toastPhotoUpdated: 'Photo updated! 📸',
    toastPhotoError: 'Error uploading photo. Try again.',
    toastPhotoTooBig: 'Photo too large! Max 10MB',
    toastStoryPosted: 'Workout posted! 💪🔥',
    toastStoryError: 'Error posting. Try again.',
    toastMsgSent: 'Message sent! ✉️',
    toastMsgEmpty: 'Type a message!',
    toastMsgDeleted: 'Message deleted!',
    toastMsgError: 'Error sending.',
    toastCodeCopied: 'Code copied! 📋',
    toastCodeTooShort: 'Code too short!',
    toastCodeUpdated: 'Code updated! ✅',
    toastStudentApproved: 'Student approved! ✅',
    toastStudentBlocked: 'Student blocked 🚫',
    toastStudentUnblocked: 'Student unblocked ✅',
    toastMonthReset: '✅ Month reset successfully!',
    toastMonthResetError: 'Error resetting month: ',
    toastHallSaved: '✅ Hall of Fame saved with photos!',
    toastHallError: 'Error: ',
    toastOrderSaved: '✅ Order saved!',
    toastOrderError: 'Error: ',
    toastSelectStudents: 'Select at least 1 student',
    toastPhraseUpdated: 'Daily phrase updated! 💬',
    toastPhraseAuto: 'Using automatic phrase!',
    toastSending: 'Uploading photo... ⏳',
    toastSaved: '✅ Saved successfully!',

    // ===== ACCOUNT / SETTINGS =====
    toastNameTooShort: 'Name too short!',
    toastNameUpdated: 'Name updated! ✅',
    toastNameError: 'Error updating name.',
    toastEmailEmpty: 'Enter the new email!',
    toastPasswordRequired: 'Enter your current password!',
    toastEmailUpdated: 'Email updated! ✅',
    toastPasswordWrong: 'Incorrect password!',
    toastEmailInUse: 'Email already in use!',
    toastEmailInvalid: 'Invalid email!',
    toastEmailError: 'Error updating email.',
    toastPasswordTooShort: 'New password must be at least 6 characters!',
    toastPasswordUpdated: 'Password updated! ✅',
    toastPasswordError: 'Error updating password.',

    // ===== ADMIN =====
    adminRanking: '🏆 Ranking',
    adminWeekly: '📅 Weekly',
    adminFeed: '💬 Feed',
    adminChat: '🗨️ Chat',
    adminMsgs: '✉️ Messages',
    adminSearch: '🔍 Search student...',
    adminAll: 'All',
    adminActive: '✅ Active',
    adminPending: '⏳ Pending',
    adminBlocked: '🚫 Blocked',
    adminInactive: '😴 Inactive',
    adminTrainingsToday: 'Workouts today',
    adminRankingFull: '🏆 Full ranking',
    adminRefresh: '↻ Refresh',
    adminInviteCode: 'Invite code:',
    adminCopyCode: 'Copy',
    adminEditCode: 'Edit',
    adminSaveCode: 'Save',
    adminApprove: 'Approve',
    adminBlock: 'Block',
    adminUnblock: 'Unblock',
    adminWeeklyReport: '📅 Weekly Report',
    adminFeedTitle: '💬 Team Feed',
    adminChatTitle: '🗨️ Live Chat',
    adminResetMonth: 'Reset month',
    adminHallOfFame: 'Hall of Fame',

    // ===== CELEBRATION =====
    celebrationTraining: 'Workout Complete!',
    celebrationBadge: 'New Achievement!',
    celebrationLevelUp: 'Level Up!',
    celebrationContinue: 'Keep it up!',

    // ===== MISSION =====
    missionComplete: 'Mission Complete! ✅',
    missionBtn: 'Complete Mission',
    missionBtnDone: '✅ Completed',

    // ===== STORIES =====
    storyNoPhotos: 'No photos today yet.',
    storyPostBtn: '📸 Post my workout',

    // ===== ERRORS =====
    errorGeneral: 'Error. Please try again.',
    errorNetwork: 'Connection error.',
    errorLogin: 'Invalid code or name not found.',
    errorPending: 'Account pending approval.',
    errorBlocked: 'Account blocked. Contact your coach.',
  },

  es: {
    // ===== GENERAL =====
    appName: 'Team Lira',
    loading: 'CARGANDO...',

    // ===== LOGIN =====
    loginTitle: 'Entrar en',
    loginName: 'Tu nombre',
    loginCode: 'Código de invitación',
    loginBtn: 'Entrar',
    loginAdmin: 'Soy admin',
    loginAdminBtn: 'Acceder al panel',

    // ===== NAVEGACIÓN =====
    navRanking: 'Ranking',
    navBadges: 'Logros',
    navFeed: 'Feed',
    navProfile: 'Perfil',
    navLogout: 'Salir',

    // ===== DASHBOARD =====
    dashStreak: 'días seguidos',
    dashPoints: 'puntos',
    dashTrainings: '💪 Entrenamientos',
    dashRanking: '🏆 Ranking',
    dashMission: '⚡ Misión del día',
    dashMissionDone: '✅ Misión completada',
    dashStoriesTitle: '📸 Entrenamientos de hoy',
    dashCheckin: 'Check-in de hoy',

    // ===== CHECK-IN =====
    checkinTreino: 'Entrenamiento completado',
    checkinCardio: 'Cardio del día',
    checkinCafe: 'Desayuno seguido',
    checkinLanche: 'Merienda seguida',
    checkinAlmoco: 'Almuerzo seguido',
    checkinJantar: 'Cena seguida',
    checkinHidra: 'Hidratación del día',
    checkinFrutas: 'Frutas/Verduras de hoy',
    pts: 'puntos',

    // ===== RANKING =====
    rankingTitle: '🏆 Ranking',
    rankingMonthly: '📅 Mensual',
    rankingTotal: '🏆 General',
    rankingHallOfFame: '👑 Hall de la Fama',
    rankingNoData: 'Sin datos aún.',
    rankingPosition: '#',
    rankingPoints: 'pts',

    // ===== BADGES =====
    badgesTitle: '🎖️ Logros',
    badgeCategories: {
      treino: '💪 Entrenamiento',
      streak: '🔥 Racha',
      meal: '🍽️ Alimentación',
      weight: '⚖️ Peso',
      points: '👑 Puntuación',
      ranking: '🏆 Ranking',
      hydra: '💧 Hidratación',
      engage: '📸 Participación',
    },

    // ===== PERFIL =====
    profileTitle: 'Mi Perfil',
    profileLevel: 'Nivel',
    profileBadges: 'Logros',
    profileTrainings: 'Entrenamientos realizados',
    profileStreak: 'Mejor racha',
    profileChangePhoto: 'Cambiar foto',
    profileLogout: 'Cerrar sesión',
    profileWeight: 'Peso actual (kg)',
    profileWeightGoal: 'Meta de peso',
    profileWeightSave: 'Guardar meta',
    profileWeightHistory: 'Historial',

    // ===== FEED =====
    feedTitle: '💬 Feed del Equipo',
    feedNoData: 'Sin actividad aún.',
    feedPostPhoto: 'Publicar foto de entrenamiento',
    feedSendMsg: 'Enviar mensaje',
    feedPlaceholder: 'Escribe algo...',
    feedAdmin: '✉️ ¡Mensaje del profesor!',

    // ===== TOASTS =====
    toastCheckinDone: '+{pts} puntos! 🔥',
    toastCheckinAlready: '¡Ya registrado hoy!',
    toastCheckinError: 'Error al registrar. Inténtalo de nuevo.',
    toastWeightSaved: '¡Peso guardado! ⚖️',
    toastWeightInvalid: 'Peso inválido',
    toastGoalSaved: '¡Meta guardada! 🎯',
    toastGoalInvalid: 'Meta inválida',
    toastPhotoUpdated: '¡Foto actualizada! 📸',
    toastPhotoError: 'Error al subir foto. Inténtalo de nuevo.',
    toastPhotoTooBig: '¡Foto muy grande! Máximo 10MB',
    toastStoryPosted: '¡Entrenamiento publicado! 💪🔥',
    toastStoryError: 'Error al publicar. Inténtalo de nuevo.',
    toastMsgSent: '¡Mensaje enviado! ✉️',
    toastMsgEmpty: '¡Escribe un mensaje!',
    toastMsgDeleted: '¡Mensaje eliminado!',
    toastMsgError: 'Error al enviar.',
    toastCodeCopied: '¡Código copiado! 📋',
    toastCodeTooShort: '¡Código muy corto!',
    toastCodeUpdated: '¡Código actualizado! ✅',
    toastStudentApproved: '¡Alumno aprobado! ✅',
    toastStudentBlocked: 'Alumno bloqueado 🚫',
    toastStudentUnblocked: 'Alumno desbloqueado ✅',
    toastMonthReset: '✅ ¡Mes reiniciado con éxito!',
    toastMonthResetError: 'Error al reiniciar mes: ',
    toastHallSaved: '✅ ¡Hall of Fame guardado con fotos!',
    toastHallError: 'Error: ',
    toastOrderSaved: '✅ ¡Orden guardado!',
    toastOrderError: 'Error: ',
    toastSelectStudents: 'Selecciona al menos 1 alumno',
    toastPhraseUpdated: '¡Frase del día actualizada! 💬',
    toastPhraseAuto: '¡Usando frase automática!',
    toastSending: 'Subiendo foto... ⏳',
    toastSaved: '✅ ¡Guardado con éxito!',

    // ===== CUENTA / CONFIGURACIÓN =====
    toastNameTooShort: '¡Nombre muy corto!',
    toastNameUpdated: '¡Nombre actualizado! ✅',
    toastNameError: 'Error al actualizar nombre.',
    toastEmailEmpty: '¡Ingresa el nuevo correo!',
    toastPasswordRequired: '¡Ingresa tu contraseña actual!',
    toastEmailUpdated: '¡Correo actualizado! ✅',
    toastPasswordWrong: '¡Contraseña incorrecta!',
    toastEmailInUse: '¡Correo ya en uso!',
    toastEmailInvalid: '¡Correo inválido!',
    toastEmailError: 'Error al actualizar correo.',
    toastPasswordTooShort: '¡La nueva contraseña necesita mínimo 6 caracteres!',
    toastPasswordUpdated: '¡Contraseña actualizada! ✅',
    toastPasswordError: 'Error al actualizar contraseña.',

    // ===== ADMIN =====
    adminRanking: '🏆 Ranking',
    adminWeekly: '📅 Semanal',
    adminFeed: '💬 Feed',
    adminChat: '🗨️ Chat',
    adminMsgs: '✉️ Mensajes',
    adminSearch: '🔍 Buscar alumno...',
    adminAll: 'Todos',
    adminActive: '✅ Activos',
    adminPending: '⏳ Pendientes',
    adminBlocked: '🚫 Bloqueados',
    adminInactive: '😴 Inactivos',
    adminTrainingsToday: 'Entrenamientos hoy',
    adminRankingFull: '🏆 Ranking completo',
    adminRefresh: '↻ Actualizar',
    adminInviteCode: 'Código de invitación:',
    adminCopyCode: 'Copiar',
    adminEditCode: 'Editar',
    adminSaveCode: 'Guardar',
    adminApprove: 'Aprobar',
    adminBlock: 'Bloquear',
    adminUnblock: 'Desbloquear',
    adminWeeklyReport: '📅 Reporte Semanal',
    adminFeedTitle: '💬 Feed del Equipo',
    adminChatTitle: '🗨️ Chat en Vivo',
    adminResetMonth: 'Reiniciar mes',
    adminHallOfFame: 'Hall de la Fama',

    // ===== CELEBRACIÓN =====
    celebrationTraining: '¡Entrenamiento Completado!',
    celebrationBadge: '¡Nuevo Logro!',
    celebrationLevelUp: '¡Subiste de Nivel!',
    celebrationContinue: '¡Sigue así!',

    // ===== MISIÓN =====
    missionComplete: '¡Misión Completada! ✅',
    missionBtn: 'Completar Misión',
    missionBtnDone: '✅ Completada',

    // ===== STORIES =====
    storyNoPhotos: 'Sin fotos hoy aún.',
    storyPostBtn: '📸 Publicar mi entrenamiento',

    // ===== ERRORES =====
    errorGeneral: 'Error. Inténtalo de nuevo.',
    errorNetwork: 'Error de conexión.',
    errorLogin: 'Código inválido o nombre no encontrado.',
    errorPending: 'Cuenta pendiente de aprobación.',
    errorBlocked: 'Cuenta bloqueada. Contacta a tu profesor.',
  }
};

// ===== BADGES TRADUZIDOS =====
const BADGES_TRANSLATIONS = {
  pt: {
    train_1:    { name: 'Primeira Suada',     desc: 'Realize seu 1° treino' },
    train_10:   { name: 'Rotina Iniciada',    desc: '10 treinos realizados' },
    train_50:   { name: 'Sem Desculpas',      desc: '50 treinos realizados' },
    train_100:  { name: 'Máquina de Guerra',  desc: '100 treinos realizados' },
    train_200:  { name: 'Atleta de Elite',    desc: '200 treinos realizados' },
    train_365:  { name: 'Lenda do Treino',    desc: '365 treinos realizados' },
    streak_3:   { name: 'Primeiros Passos',   desc: '3 dias de sequência' },
    streak_7:   { name: 'Pegando Fogo',       desc: '7 dias de sequência' },
    streak_30:  { name: 'Imparável',          desc: '30 dias de sequência' },
    streak_60:  { name: 'Modo Berserk',       desc: '60 dias de sequência' },
    streak_100: { name: 'Inabalável',         desc: '100 dias de sequência' },
    streak_180: { name: 'Lenda Viva',         desc: '180 dias de sequência' },
    meal_1:     { name: 'Primeira Dieta',     desc: '1 dia com 3 refeições' },
    meal_15:    { name: 'Consistência',       desc: '15 dias com 3 refeições' },
    meal_45:    { name: 'Disciplina Total',   desc: '45 dias com 3 refeições' },
    meal_90:    { name: 'Nutri Aprovaria',    desc: '90 dias com 3 refeições' },
    meal_180:   { name: 'Alimentação Campeão',desc: '180 dias com 3 refeições' },
    weight_1:   { name: 'Primeiro Registro',  desc: 'Registre seu peso pela 1° vez' },
    weight_15:  { name: 'Acompanhando',       desc: '15 registros de peso' },
    weight_45:  { name: 'Evolução Constante', desc: '45 registros de peso' },
    weight_90:  { name: 'Meta Atingida',      desc: '90 registros de peso' },
    pts_500:    { name: 'Começando',          desc: 'Alcance 500 pts' },
    pts_2000:   { name: 'Aquecendo',          desc: 'Alcance 2.000 pts' },
    pts_5000:   { name: 'Em Chamas',          desc: 'Alcance 5.000 pts' },
    pts_10000:  { name: 'Alto Nível',         desc: 'Alcance 10.000 pts' },
    pts_20000:  { name: 'Elite',              desc: 'Alcance 20.000 pts' },
    pts_50000:  { name: 'Lenda',              desc: 'Alcance 50.000 pts' },
    rank_top3:  { name: 'Destaque do Mês',    desc: 'Termine um mês no top 3' },
    rank_1st:   { name: 'Campeão',            desc: 'Termine um mês em 1° lugar' },
    rank_3x:    { name: 'Dinastia',           desc: '3 meses consecutivos em 1°' },
    hydra_15:   { name: 'Hidratado',          desc: '15 dias seguidos de hidratação' },
    hydra_30:   { name: 'Sempre Hidratado',   desc: '30 dias seguidos de hidratação' },
    hydra_60:   { name: 'Hidratação de Elite',desc: '60 dias seguidos de hidratação' },
    story_1:    { name: 'Na Mídia',           desc: 'Poste seu 1° story de treino' },
    chat_30:    { name: 'Voz do Time',        desc: '30 dias interagindo no chat' },
    app_60:     { name: 'Pilar do Time',      desc: '60 dias de uso do app' },
    app_90:     { name: 'Veterano',           desc: '90 dias de uso do app' },
    app_180:    { name: 'Comprometido',       desc: '180 dias de uso do app' },
  },
  en: {
    train_1:    { name: 'First Sweat',          desc: 'Complete your 1st workout' },
    train_10:   { name: 'Routine Started',      desc: '10 workouts completed' },
    train_50:   { name: 'No Excuses',           desc: '50 workouts completed' },
    train_100:  { name: 'War Machine',          desc: '100 workouts completed' },
    train_200:  { name: 'Elite Athlete',        desc: '200 workouts completed' },
    train_365:  { name: 'Workout Legend',       desc: '365 workouts completed' },
    streak_3:   { name: 'First Steps',          desc: '3-day streak' },
    streak_7:   { name: 'On Fire',              desc: '7-day streak' },
    streak_30:  { name: 'Unstoppable',          desc: '30-day streak' },
    streak_60:  { name: 'Berserk Mode',         desc: '60-day streak' },
    streak_100: { name: 'Unshakeable',          desc: '100-day streak' },
    streak_180: { name: 'Living Legend',        desc: '180-day streak' },
    meal_1:     { name: 'First Diet Day',       desc: '1 day with 3 meals' },
    meal_15:    { name: 'Consistency',          desc: '15 days with 3 meals' },
    meal_45:    { name: 'Total Discipline',     desc: '45 days with 3 meals' },
    meal_90:    { name: 'Nutritionist Approved',desc: '90 days with 3 meals' },
    meal_180:   { name: 'Champion Nutrition',   desc: '180 days with 3 meals' },
    weight_1:   { name: 'First Log',            desc: 'Log your weight for the 1st time' },
    weight_15:  { name: 'Tracking',             desc: '15 weight logs' },
    weight_45:  { name: 'Steady Progress',      desc: '45 weight logs' },
    weight_90:  { name: 'Goal Reached',         desc: '90 weight logs' },
    pts_500:    { name: 'Starting Out',         desc: 'Reach 500 pts' },
    pts_2000:   { name: 'Warming Up',           desc: 'Reach 2,000 pts' },
    pts_5000:   { name: 'On Fire',              desc: 'Reach 5,000 pts' },
    pts_10000:  { name: 'High Level',           desc: 'Reach 10,000 pts' },
    pts_20000:  { name: 'Elite',                desc: 'Reach 20,000 pts' },
    pts_50000:  { name: 'Legend',               desc: 'Reach 50,000 pts' },
    rank_top3:  { name: 'Monthly Standout',     desc: 'Finish a month in the top 3' },
    rank_1st:   { name: 'Champion',             desc: 'Finish a month in 1st place' },
    rank_3x:    { name: 'Dynasty',              desc: '3 consecutive months in 1st' },
    hydra_15:   { name: 'Hydrated',             desc: '15 consecutive hydration days' },
    hydra_30:   { name: 'Always Hydrated',      desc: '30 consecutive hydration days' },
    hydra_60:   { name: 'Elite Hydration',      desc: '60 consecutive hydration days' },
    story_1:    { name: 'In the Spotlight',     desc: 'Post your 1st workout story' },
    chat_30:    { name: 'Team Voice',           desc: '30 days engaging in chat' },
    app_60:     { name: 'Team Pillar',          desc: '60 days using the app' },
    app_90:     { name: 'Veteran',              desc: '90 days using the app' },
    app_180:    { name: 'Committed',            desc: '180 days using the app' },
  },
  es: {
    train_1:    { name: 'Primer Sudor',          desc: 'Completa tu 1° entrenamiento' },
    train_10:   { name: 'Rutina Iniciada',       desc: '10 entrenamientos realizados' },
    train_50:   { name: 'Sin Excusas',           desc: '50 entrenamientos realizados' },
    train_100:  { name: 'Máquina de Guerra',     desc: '100 entrenamientos realizados' },
    train_200:  { name: 'Atleta de Élite',       desc: '200 entrenamientos realizados' },
    train_365:  { name: 'Leyenda del Entreno',   desc: '365 entrenamientos realizados' },
    streak_3:   { name: 'Primeros Pasos',        desc: 'Racha de 3 días' },
    streak_7:   { name: 'En Llamas',             desc: 'Racha de 7 días' },
    streak_30:  { name: 'Imparable',             desc: 'Racha de 30 días' },
    streak_60:  { name: 'Modo Berserker',        desc: 'Racha de 60 días' },
    streak_100: { name: 'Inquebrantable',        desc: 'Racha de 100 días' },
    streak_180: { name: 'Leyenda Viva',          desc: 'Racha de 180 días' },
    meal_1:     { name: 'Primera Dieta',         desc: '1 día con 3 comidas' },
    meal_15:    { name: 'Consistencia',          desc: '15 días con 3 comidas' },
    meal_45:    { name: 'Disciplina Total',      desc: '45 días con 3 comidas' },
    meal_90:    { name: 'Nutricionista Aprueba', desc: '90 días con 3 comidas' },
    meal_180:   { name: 'Campeón Nutricional',   desc: '180 días con 3 comidas' },
    weight_1:   { name: 'Primer Registro',       desc: 'Registra tu peso por 1° vez' },
    weight_15:  { name: 'Siguiendo el Progreso', desc: '15 registros de peso' },
    weight_45:  { name: 'Evolución Constante',   desc: '45 registros de peso' },
    weight_90:  { name: 'Meta Alcanzada',        desc: '90 registros de peso' },
    pts_500:    { name: 'Comenzando',            desc: 'Alcanza 500 pts' },
    pts_2000:   { name: 'Calentando',            desc: 'Alcanza 2.000 pts' },
    pts_5000:   { name: 'En Llamas',             desc: 'Alcanza 5.000 pts' },
    pts_10000:  { name: 'Alto Nivel',            desc: 'Alcanza 10.000 pts' },
    pts_20000:  { name: 'Élite',                 desc: 'Alcanza 20.000 pts' },
    pts_50000:  { name: 'Leyenda',               desc: 'Alcanza 50.000 pts' },
    rank_top3:  { name: 'Destacado del Mes',     desc: 'Termina un mes en el top 3' },
    rank_1st:   { name: 'Campeón',               desc: 'Termina un mes en 1° lugar' },
    rank_3x:    { name: 'Dinastía',              desc: '3 meses consecutivos en 1°' },
    hydra_15:   { name: 'Hidratado',             desc: '15 días consecutivos de hidratación' },
    hydra_30:   { name: 'Siempre Hidratado',     desc: '30 días consecutivos de hidratación' },
    hydra_60:   { name: 'Hidratación de Élite',  desc: '60 días consecutivos de hidratación' },
    story_1:    { name: 'En los Medios',         desc: 'Publica tu 1° story de entrenamiento' },
    chat_30:    { name: 'Voz del Equipo',        desc: '30 días interactuando en el chat' },
    app_60:     { name: 'Pilar del Equipo',      desc: '60 días usando la app' },
    app_90:     { name: 'Veterano',              desc: '90 días usando la app' },
    app_180:    { name: 'Comprometido',          desc: '180 días usando la app' },
  }
};

// ===== LEVELS TRADUZIDOS =====
const LEVELS_TRANSLATIONS = {
  pt: [
    {name:'Iniciante',badge:'🥉 Iniciante'},
    {name:'Imparável',badge:'⚡ Imparável'},
    {name:'Determinado',badge:'💪 Determinado'},
    {name:'Resistente',badge:'🛡️ Resistente'},
    {name:'Focado',badge:'🎯 Focado'},
    {name:'Veloz',badge:'🏃 Veloz'},
    {name:'Forte',badge:'🦾 Forte'},
    {name:'Guerreiro',badge:'⚔️ Guerreiro'},
    {name:'Combatente',badge:'💥 Combatente'},
    {name:'Campeão',badge:'🥈 Campeão'},
    {name:'Destaque',badge:'🌟 Destaque'},
    {name:'Veterano',badge:'🎖️ Veterano'},
    {name:'Especialista',badge:'🏅 Especialista'},
    {name:'Elite',badge:'🥇 Elite'},
    {name:'Mestre',badge:'🔱 Mestre'},
    {name:'Grão Mestre',badge:'👑 Grão Mestre'},
    {name:'Dominante',badge:'🌙 Dominante'},
    {name:'Lendário',badge:'💎 Lendário'},
    {name:'Extraordinário',badge:'💎 Extraordinário'},
    {name:'Lenda Viva',badge:'🌟 Lenda Viva'},
  ],
  en: [
    {name:'Beginner',badge:'🥉 Beginner'},
    {name:'Unstoppable',badge:'⚡ Unstoppable'},
    {name:'Determined',badge:'💪 Determined'},
    {name:'Resilient',badge:'🛡️ Resilient'},
    {name:'Focused',badge:'🎯 Focused'},
    {name:'Swift',badge:'🏃 Swift'},
    {name:'Strong',badge:'🦾 Strong'},
    {name:'Warrior',badge:'⚔️ Warrior'},
    {name:'Fighter',badge:'💥 Fighter'},
    {name:'Champion',badge:'🥈 Champion'},
    {name:'Standout',badge:'🌟 Standout'},
    {name:'Veteran',badge:'🎖️ Veteran'},
    {name:'Specialist',badge:'🏅 Specialist'},
    {name:'Elite',badge:'🥇 Elite'},
    {name:'Master',badge:'🔱 Master'},
    {name:'Grand Master',badge:'👑 Grand Master'},
    {name:'Dominant',badge:'🌙 Dominant'},
    {name:'Legendary',badge:'💎 Legendary'},
    {name:'Extraordinary',badge:'💎 Extraordinary'},
    {name:'Living Legend',badge:'🌟 Living Legend'},
  ],
  es: [
    {name:'Principiante',badge:'🥉 Principiante'},
    {name:'Imparable',badge:'⚡ Imparable'},
    {name:'Determinado',badge:'💪 Determinado'},
    {name:'Resistente',badge:'🛡️ Resistente'},
    {name:'Enfocado',badge:'🎯 Enfocado'},
    {name:'Veloz',badge:'🏃 Veloz'},
    {name:'Fuerte',badge:'🦾 Fuerte'},
    {name:'Guerrero',badge:'⚔️ Guerrero'},
    {name:'Combatiente',badge:'💥 Combatiente'},
    {name:'Campeón',badge:'🥈 Campeón'},
    {name:'Destacado',badge:'🌟 Destacado'},
    {name:'Veterano',badge:'🎖️ Veterano'},
    {name:'Especialista',badge:'🏅 Especialista'},
    {name:'Élite',badge:'🥇 Élite'},
    {name:'Maestro',badge:'🔱 Maestro'},
    {name:'Gran Maestro',badge:'👑 Gran Maestro'},
    {name:'Dominante',badge:'🌙 Dominante'},
    {name:'Legendario',badge:'💎 Legendario'},
    {name:'Extraordinario',badge:'💎 Extraordinario'},
    {name:'Leyenda Viva',badge:'🌟 Leyenda Viva'},
  ]
};

// ===== ENGINE DE i18n =====
let currentLang = localStorage.getItem('tl_lang') || 'pt';

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('tl_lang', lang);
  applyTranslations();
  // Atualiza badges e levels no app
  if (typeof updateBadgesLanguage === 'function') updateBadgesLanguage();
  if (typeof updateLevelsLanguage === 'function') updateLevelsLanguage();
  // Re-renderiza se já logado
  if (typeof currentUserData !== 'undefined' && currentUserData) {
    if (typeof renderDashboard === 'function') renderDashboard();
    if (typeof loadAdminData === 'function' && typeof isAdmin !== 'undefined' && isAdmin) loadAdminData();
  }
}

function t(key, vars) {
  const parts = key.split('.');
  let val = TRANSLATIONS[currentLang];
  for (const p of parts) {
    if (!val) return key;
    val = val[p];
  }
  if (!val) {
    // fallback para PT
    val = TRANSLATIONS['pt'];
    for (const p of parts) { if (!val) return key; val = val[p]; }
  }
  if (typeof val !== 'string') return key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      val = val.replace('{' + k + '}', v);
    }
  }
  return val || key;
}

function tBadge(id) {
  const badges = BADGES_TRANSLATIONS[currentLang] || BADGES_TRANSLATIONS['pt'];
  return badges[id] || BADGES_TRANSLATIONS['pt'][id] || { name: id, desc: '' };
}

function tLevel(index) {
  const levels = LEVELS_TRANSLATIONS[currentLang] || LEVELS_TRANSLATIONS['pt'];
  return levels[index] || LEVELS_TRANSLATIONS['pt'][index];
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const useHtml = el.hasAttribute('data-i18n-html');
    const translated = t(key);
    if (attr) {
      el.setAttribute(attr, translated);
    } else if (useHtml) {
      el.innerHTML = translated;
    } else {
      el.textContent = translated;
    }
  });
  // Atualiza loading text
  const loadingEl = document.querySelector('.loading-text');
  if (loadingEl) loadingEl.textContent = t('loading');
}

// ===== SELETOR DE IDIOMA =====
function renderLanguageSelector() {
  const flags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };
  const names = { pt: 'PT', en: 'EN', es: 'ES' };
  const container = document.createElement('div');
  container.id = 'lang-selector';
  container.style.cssText = 'display:flex;gap:6px;align-items:center;';
  for (const [lang, flag] of Object.entries(flags)) {
    const btn = document.createElement('button');
    const active = lang === currentLang ? 'background:var(--gold);color:var(--black);' : 'background:var(--dark2);color:var(--gray);';
    btn.style.cssText = active + 'border:1px solid #444;border-radius:6px;padding:3px 7px;font-size:12px;font-weight:700;cursor:pointer;';
    btn.textContent = flag + ' ' + names[lang];
    btn.addEventListener('click', () => setLang(lang));
    container.appendChild(btn);
  }
  return container;
}

// Injeta o seletor no header assim que o DOM estiver pronto
function injectLangSelector() {
  // Injeta nas top-bars do aluno e do admin
  document.querySelectorAll('.top-bar').forEach(bar => {
    // Evita duplicar
    if (bar.querySelector('#lang-selector')) return;
    bar.appendChild(renderLanguageSelector());
  });
}

// Aplica ao carregar e reinjecta o seletor periodicamente
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  // Tenta injetar a cada 1 segundo até encontrar as top-bars
  const interval = setInterval(() => {
    const bars = document.querySelectorAll('.top-bar');
    if (bars.length > 0) {
      injectLangSelector();
    }
  }, 1000);
  // Para após 30 segundos para não rodar eternamente
  setTimeout(() => clearInterval(interval), 30000);
});


  // Dias da semana e meses
  sun:'Domingo', mon:'Segunda', tue:'Terça', wed:'Quarta', thu:'Quinta', fri:'Sexta', sat:'Sábado',
  jan:'Janeiro', feb:'Fevereiro', mar:'Março', apr:'Abril', may:'Maio', jun:'Junho',
  jul:'Julho', aug:'Agosto', sep:'Setembro', oct:'Outubro', nov:'Novembro', dec:'Dezembro',
  of:'de',
  // --- Strings de UI (adicionadas na tradução completa) ---
  btnLoggingIn: 'Entrando...',
  btnLogin: 'Entrar',
  btnCreatingAccount: 'Criando conta...',
  btnCreateAccount: 'Criar conta',
  errFillAll: 'Preencha todos os campos',
  errInvalidCode: 'Código de convite inválido',
  errPasswordMin: 'Senha: mínimo 6 caracteres',
  rankingLabel: 'Top alunos do Team Lira',
  ptsNeeded: 'Faltam',
  maxLevel: '🏆 Nível máximo!',
  errLoadData: 'Erro ao carregar dados.',
  awaitingApproval: 'Aguard. aprovação',
  workoutsToday: 'Treinos hoje',
  statusActive: 'Ativo',
  statusPartial: 'Parcial',
  statusInactive: 'Inativo',
  statusPending: 'Pendente',
  statusBlocked: 'Bloqueado',
  rejectStudent: 'Rejeitar aluno',
  blockStudent: 'Bloquear aluno',
  unblockStudent: 'Desbloquear aluno',
  block: 'Bloquear',
  unblock: 'Desbloquear',
  confirmBlock: 'Bloquear esse aluno?',
  confirmUnblock: 'Desbloquear esse aluno?',
  last7Days: 'Últimos 7 dias',
  activeStudents: 'alunos ativos',
  loading: 'Carregando...',
  errLoad: 'Erro ao carregar',
  errLoadRanking: 'Erro ao carregar ranking',
  errLoadFeed: 'Erro ao carregar feed.',
  noActivityYet: 'Nenhuma atividade ainda.',
  noActivityFirst: 'Nenhuma atividade ainda.<br>Seja o primeiro! 💪',
  noMsgsYet: 'Nenhuma mensagem ainda.',
  noMsgsFirst: 'Nenhuma mensagem ainda. Seja o primeiro! 💬',
  calculating: 'Calculando...',
  weightNoData: 'Registre seu peso nos check-ins para ver a evolução aqui!',
  weightSetGoal: 'Defina uma meta de peso para acompanhar seu progresso!',
  monthlyPts: 'pts mensais',
  activeToday: 'Ativos hoje',
  filterAll: 'Todos',
  filterActive: '✅ Ativos',
  filterPending: '⏳ Pendentes',
  filterBlocked: '🚫 Bloqueados',
  filterInactive: '😴 Sumidos',
  fixHallBtn: '🏆 Corrigir Hall',
  tiebreakBtn: '🔢 Desempate',
  fixHallOfFame: '🏆 Corrigir Hall of Fame',
  rankOrder: '🔢 Ordem do Ranking',
  rankOrderHelp: 'Use ▲▼ para reordenar em caso de empate',
  firstPlace: '🥇 1° Lugar',
  secondPlace: '🥈 2° Lugar',
  thirdPlace: '🥉 3° Lugar',
  cancel: 'Cancelar',
  save: 'Salvar',
  pendingMsg: 'Seu cadastro está aguardando aprovação do professor.<br><br>Você receberá acesso em breve. Tente entrar novamente mais tarde.',
  accessBlocked: 'Acesso bloqueado',
  weightRegister: 'Registre seu peso para ver a evolução aqui!',
,
  // Days and months
  sun:'Sunday', mon:'Monday', tue:'Tuesday', wed:'Wednesday', thu:'Thursday', fri:'Friday', sat:'Saturday',
  jan:'January', feb:'February', mar:'March', apr:'April', may:'May', jun:'June',
  jul:'July', aug:'August', sep:'September', oct:'October', nov:'November', dec:'December',
  of:'of',
  // --- Strings de UI ---
  btnLoggingIn: 'Logging in...',
  btnLogin: 'Log In',
  btnCreatingAccount: 'Creating account...',
  btnCreateAccount: 'Create Account',
  errFillAll: 'Please fill in all fields',
  errInvalidCode: 'Invalid invite code',
  errPasswordMin: 'Password: at least 6 characters',
  rankingLabel: 'Top students of Team Lira',
  ptsNeeded: 'Need',
  maxLevel: '🏆 Max level!',
  errLoadData: 'Error loading data.',
  awaitingApproval: 'Awaiting approval',
  workoutsToday: 'Workouts today',
  statusActive: 'Active',
  statusPartial: 'Partial',
  statusInactive: 'Inactive',
  statusPending: 'Pending',
  statusBlocked: 'Blocked',
  rejectStudent: 'Reject student',
  blockStudent: 'Block student',
  unblockStudent: 'Unblock student',
  block: 'Block',
  unblock: 'Unblock',
  confirmBlock: 'Block this student?',
  confirmUnblock: 'Unblock this student?',
  last7Days: 'Last 7 days',
  activeStudents: 'active students',
  loading: 'Loading...',
  errLoad: 'Error loading',
  errLoadRanking: 'Error loading ranking',
  errLoadFeed: 'Error loading feed.',
  noActivityYet: 'No activity yet.',
  noActivityFirst: 'No activity yet.<br>Be the first! 💪',
  noMsgsYet: 'No messages yet.',
  noMsgsFirst: 'No messages yet. Be the first! 💬',
  calculating: 'Calculating...',
  weightNoData: 'Log your weight in check-ins to see progress here!',
  weightSetGoal: 'Set a weight goal to track your progress!',
  monthlyPts: 'monthly pts',
  activeToday: 'Active today',
  filterAll: 'All',
  filterActive: '✅ Active',
  filterPending: '⏳ Pending',
  filterBlocked: '🚫 Blocked',
  filterInactive: '😴 Inactive',
  fixHallBtn: '🏆 Fix Hall',
  tiebreakBtn: '🔢 Tiebreak',
  fixHallOfFame: '🏆 Fix Hall of Fame',
  rankOrder: '🔢 Ranking Order',
  rankOrderHelp: 'Use ▲▼ to reorder in case of a tie',
  firstPlace: '🥇 1st Place',
  secondPlace: '🥈 2nd Place',
  thirdPlace: '🥉 3rd Place',
  cancel: 'Cancel',
  save: 'Save',
  pendingMsg: 'Your registration is awaiting teacher approval.<br><br>You will receive access soon. Please try again later.',
  accessBlocked: 'Access blocked',
  weightRegister: 'Log your weight to see progress here!'
,
  // Días y meses
  sun:'Domingo', mon:'Lunes', tue:'Martes', wed:'Miércoles', thu:'Jueves', fri:'Viernes', sat:'Sábado',
  jan:'Enero', feb:'Febrero', mar:'Marzo', apr:'Abril', may:'Mayo', jun:'Junio',
  jul:'Julio', aug:'Agosto', sep:'Septiembre', oct:'Octubre', nov:'Noviembre', dec:'Diciembre',
  of:'de',
  // --- Strings de UI ---
  btnLoggingIn: 'Iniciando sesión...',
  btnLogin: 'Iniciar sesión',
  btnCreatingAccount: 'Creando cuenta...',
  btnCreateAccount: 'Crear cuenta',
  errFillAll: 'Por favor, rellena todos los campos',
  errInvalidCode: 'Código de invitación inválido',
  errPasswordMin: 'Contraseña: mínimo 6 caracteres',
  rankingLabel: 'Top estudiantes del Team Lira',
  ptsNeeded: 'Faltan',
  maxLevel: '🏆 ¡Nivel máximo!',
  errLoadData: 'Error al cargar datos.',
  awaitingApproval: 'Esperando aprobación',
  workoutsToday: 'Entrenos hoy',
  statusActive: 'Activo',
  statusPartial: 'Parcial',
  statusInactive: 'Inactivo',
  statusPending: 'Pendiente',
  statusBlocked: 'Bloqueado',
  rejectStudent: 'Rechazar estudiante',
  blockStudent: 'Bloquear estudiante',
  unblockStudent: 'Desbloquear estudiante',
  block: 'Bloquear',
  unblock: 'Desbloquear',
  confirmBlock: '¿Bloquear este estudiante?',
  confirmUnblock: '¿Desbloquear este estudiante?',
  last7Days: 'Últimos 7 días',
  activeStudents: 'estudiantes activos',
  loading: 'Cargando...',
  errLoad: 'Error al cargar',
  errLoadRanking: 'Error al cargar ranking',
  errLoadFeed: 'Error al cargar feed.',
  noActivityYet: 'Sin actividad aún.',
  noActivityFirst: 'Sin actividad aún.<br>¡Sé el primero! 💪',
  noMsgsYet: 'Sin mensajes aún.',
  noMsgsFirst: '¡Sin mensajes aún. Sé el primero! 💬',
  calculating: 'Calculando...',
  weightNoData: '¡Registra tu peso en los check-ins para ver la evolución aquí!',
  weightSetGoal: '¡Define una meta de peso para seguir tu progreso!',
  monthlyPts: 'pts mensuales',
  activeToday: 'Activos hoy',
  filterAll: 'Todos',
  filterActive: '✅ Activos',
  filterPending: '⏳ Pendientes',
  filterBlocked: '🚫 Bloqueados',
  filterInactive: '😴 Inactivos',
  fixHallBtn: '🏆 Corregir Hall',
  tiebreakBtn: '🔢 Desempate',
  fixHallOfFame: '🏆 Corregir Hall of Fame',
  rankOrder: '🔢 Orden del Ranking',
  rankOrderHelp: 'Usa ▲▼ para reordenar en caso de empate',
  firstPlace: '🥇 1° Lugar',
  secondPlace: '🥈 2° Lugar',
  thirdPlace: '🥉 3° Lugar',
  cancel: 'Cancelar',
  save: 'Guardar',
  pendingMsg: 'Tu registro está esperando la aprobación del profesor.<br><br>Recibirás acceso pronto. Intenta de nuevo más tarde.',
  accessBlocked: 'Acceso bloqueado',
  weightRegister: '¡Registra tu peso para ver la evolución aquí!'

