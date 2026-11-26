// ===== L BODY — translations.js =====
// Suporte: Português (pt) · English (en) · Español (es)

const TRANSLATIONS = {
  pt: {
    // GERAL
    appName: 'L Body',
    loading: 'CARREGANDO...',
    save: 'Salvar',
    cancel: 'Cancelar',
    update: 'Atualizar',
    back: 'Voltar ao início',
    copy: 'Copiar',
    send: 'Enviar',
    refresh: 'Atualizar',
    pts: 'pts',
    days: 'dias',
    today: 'Hoje',
    yesterday: 'Ontem',
    daysAgo: ' dias atrás',
    points: 'pontos',

    // LOGIN
    loginSlogan: '',
    loginTabSign: 'Entrar',
    loginTabCreate: 'Cadastrar',
    loginTabProf: 'Prof.',
    loginEmail: 'Email',
    loginPass: 'Senha',
    loginBtn: 'Entrar',
    loginError: 'Email ou senha incorretos',
    loginName: 'Nome completo',
    loginCode: 'Código de convite',
    loginCreateBtn: 'Criar conta',
    loginCreateError: 'Erro ao criar conta',
    loginEmailTaken: 'Email já cadastrado',
    loginAdminPass: 'Senha do professor',
    loginAdminBtn: 'Acessar painel',
    loginAdminError: 'Senha incorreta',
    loginEntering: 'Entrando...',
    loginCreating: 'Criando conta...',

    // DASHBOARD
    dashHello: 'Olá,',
    dashCheckin: 'Check-in de hoje',
    dashMission: 'Missão do dia',
    dashMissionDone: 'Missão concluída',
    dashCompleteMission: 'Completar missão',
    dashStories: 'Treinos de hoje',
    dashYourStory: 'Seu treino',
    dashStreakBroken: 'Sequência quebrada!',
    dashStreakRecovery: 'Faça 3 refeições hoje para recuperar sua sequência!',

    // CHECKIN ITENS
    checkinTreino: 'Treino concluído',
    checkinCardio: 'Cardio do dia',
    checkinCafe: 'Café da manhã seguido',
    checkinLanche: 'Lanche da tarde seguido',
    checkinAlmoco: 'Almoço seguido',
    checkinJantar: 'Jantar seguido',
    checkinHidra: 'Hidratação do dia',
    checkinFrutas: 'Comi frutas ou vegetais hoje',

    // STATS
    statStreak: 'Sequência',
    statTrainings: 'Treinos',
    statRanking: 'Ranking',

    // RANKING
    rankingTitle: 'Ranking',
    rankTabMonth: 'Mês atual',
    rankTabTotal: 'Pontuação Geral',
    rankTabHistory: 'Meses anteriores',
    rankingMonthLabel: 'Top alunos do L Body · ',
    rankingTotalTitle: 'Pontuação Geral',
    rankingTotalSub: 'Pontuação acumulada desde o início',
    rankingNoData: 'Nenhum dado ainda.',

    // BADGES / CONQUISTAS
    badgesTitle: 'Conquistas',
    badgesSubtitle: 'Desbloqueie todas as medalhas',
    badgesUnlocked: 'Conquistas desbloqueadas',
    viewAllLevels: 'Ver todos os níveis',
    levelsTitle: 'Tabela de Níveis',

    // PERFIL / CALENDÁRIO
    streakHeader: 'Sequência — últimos 30 dias',
    calCurrent: 'Atual',
    calBest: 'Melhor',
    calFullDay: 'Dia completo',
    calNoRecord: 'Sem registro',
    weightEvolution: 'Evolução do peso',
    weightRegister: 'Registre seu peso para ver a evolução aqui!',
    registerBtn: 'Registrar',
    weightGoal: 'Meta de peso',
    statsTitle: 'Minhas estatísticas',
    statsTotalPts: 'Total de pontos',
    statsTrainings: 'Treinos realizados',
    statsBestStreak: 'Melhor sequência',
    statsBadges: 'Conquistas',
    profileUpdatingPhoto: 'Atualizando foto...',
    profileSettings: 'Configurações da conta',
    profileEditName: 'Nome de exibição',
    profileEmail: 'Trocar e-mail',
    profileUpdateEmail: 'Atualizar e-mail',
    profilePass: 'Trocar senha',
    profileUpdatePass: 'Atualizar senha',
    profileLogout: 'Sair da conta',

    // CHAT / FEED
    chatTitle: 'Chat do Time',
    chatSubtitle: 'Grupo L Body',
    chatPlaceholder: 'Mensagem...',
    chatLoading: 'Carregando mensagens...',
    feedTitle: 'Feed do Time',
    feedSubtitle: 'O que está acontecendo no L Body',
    feedLoading: 'Carregando...',

    // NAV
    navHome: 'Início',
    navRanking: 'Ranking',
    navBadges: 'Conquistas',
    navFeed: 'Feed',
    navChat: 'Chat',
    navChat: 'Chat',
    navProfile: 'Perfil',

    // ADMIN
    adminTitle: 'PAINEL',
    adminProf: 'PROF',
    adminLogout: 'Sair',
    adminHello: 'Olá,',
    adminSub: 'L Body',
    topExit: 'Sair',
    rankingTab: 'Ranking',
    weeklyTab: 'Semanal',
    feedTab: 'Feed',
    chatTab: 'Chat',
    messagesTab: 'Mensagens',
    adminTotalStudents: 'Total alunos',
    activeToday: 'Ativos hoje',
    adminAvgPts: 'Média pontos',
    workoutsToday: 'Treinos hoje',
    adminRankTitle: 'Ranking completo',
    adminRefresh: 'Atualizar',
    adminResetMonth: 'Zerar Mês',
    fixHallBtn: 'Corrigir Hall',
    tiebreakBtn: 'Desempate',
    filterAll: 'Todos',
    filterActive: 'Ativos',
    filterPending: 'Pendentes',
    filterBlocked: 'Bloqueados',
    filterInactive: 'Sumidos',
    adminLoading: 'Carregando...',
    adminColStudent: 'Aluno',
    adminColPts: 'Pts',
    adminColAction: 'Ação',
    weeklyTitle: 'Relatório da semana',
    weeklyRefresh: 'Atualizar',
    weeklyLoading: 'Carregando...',
    messagesTitle: 'Mensagens enviadas',
    messagesEmpty: 'Nenhuma mensagem enviada ainda.',
    inviteTitle: 'Código de convite',
    inviteCode: 'TEAMLIRA',
    inviteCopy: 'Copiar',
    inviteShare: 'Compartilhe com novos alunos',
    adminWaitingApproval: 'Aguard. aprovação',

    // WELCOME / PENDING / BLOCKED
    welcomeBack: 'Bem-vindo de volta,',
    streakDays: 'dias de sequência',
    goTrain: 'BORA TREINAR',
    pendingTitle: 'Cadastro enviado!',
    pendingMsg: 'Seu cadastro está aguardando aprovação do professor.<br><br>Você receberá acesso em breve. Tente entrar novamente mais tarde.',
    accessBlocked: 'Acesso bloqueado',
    blockedMsg: 'Sua conta foi bloqueada pelo professor.<br>Entre em contato para mais informações.',

    // MODAL ALUNO
    modalDetails: 'Detalhes',
    approveStudent: 'Aprovar aluno',
    blockStudent: 'Bloquear aluno',
    sendMessage: 'Enviar mensagem',
    messageFor: 'Mensagem para',
    sendBtn: 'Enviar mensagem',
    modalTotalPts: 'Total de pontos',

    // RELATÓRIO SEMANAL
    weeklyReport: 'Relatório Semanal',

    // HALL OF FAME
    fixHallOfFame: 'Corrigir Hall of Fame',
    firstPlace: '🥇 1° Lugar',
    secondPlace: '🥈 2° Lugar',
    thirdPlace: '🥉 3° Lugar',

    // RANK ORDER
    rankOrder: 'Ordem do Ranking',
    rankOrderHelp: 'Use ▲▼ para reordenar em caso de empate',

    // CELEBRAÇÕES / TOASTS
    celebLevelUp: 'SUBIU DE NÍVEL!',
    celebWorkout: 'Treino Concluído!',
    celebWorkoutMsg: ' pontos! Continue assim!',
    celebBadge: '🎖️ Nova Conquista!',
    celebMission: 'Missão Concluída!',
    celebMissionMsg: ' pontos! ',
    celebContinue: 'Continuar 🚀',
    celebWow: 'Incrível!',
    celebYouRocked: 'Você arrasou!',
    celebLevelTitle: 'SUBIU DE NÍVEL!',
    celebLevelSub: 'Continue assim! 🔥',
    celebLevelWow: 'Uhuuul! 🎉',
    celebLevelChampion: 'Campeão',

    // TOASTS
    toastCheckinDone: 'Check-in feito! +{pts} pts 💪',
    toastCheckinError: 'Erro ao salvar check-in.',
    toastWeightInvalid: 'Peso inválido (20–300 kg).',
    toastWeightSaved: 'Peso registrado!',
    toastGoalSaved: 'Meta salva!',
    toastMonthReset: 'Mês zerado com sucesso!',
    toastMonthResetError: 'Erro: ',
    toastSelectStudents: 'Selecione os vencedores.',
    toastHallSaved: 'Hall of Fame salvo!',
    toastHallError: 'Erro: ',
    toastOrderSaved: 'Ordem salva!',
    toastOrderError: 'Erro: ',
    toastCodeCopied: 'Código copiado!',
    toastNameSaved: 'Nome atualizado!',
    toastEmailSaved: 'Email atualizado!',
    toastPassSaved: 'Senha atualizada!',
    toastPhotoSaved: 'Foto atualizada!',
    toastPhraseUpdated: 'Frase atualizada!',
    toastPhraseAuto: 'Voltou para frase automática.',

    // DATAS
    dateWeekdays: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dateMonths: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
    dateMonthsFull: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],

    // PONTOS
    faltam: 'Faltam ',
    ptsText: ' pts',
    diasText: ' dias',
    maxLevel: 'Nível máximo!',
    confirmReset: 'Zerar pontos do mês atual de TODOS os alunos? Esta ação não pode ser desfeita.',
    // DATA - formato
    dateOf: ' de ',
    dateFormat: '{weekday}, {day} de {month}',

    // MISSÕES
    missionComplete: 'Completar (+{pts} pts)',
    missionDone: 'Missão concluída!',

    // BADGES - categorias
    catTreino: 'Treino',
    catSequencia: 'Sequência',
    catAlimentacao: 'Alimentação',
    catPeso: 'Peso',
    catPontuacao: 'Pontuação',
    catRanking: 'Ranking',
    catHidratacao: 'Hidratação',
    catEngajamento: 'Engajamento',
    badgesUnlockedLabel: 'Conquistas desbloqueadas',
    badgeUnlocked: 'DESBLOQUEADO',

    // RANKING inline
    rankSeq: ' dias seq.',
    rankSub: ' · ',

    // MODAL ADMIN
    modalLastCheckin: 'Ultimo check-in',
    modalNever: 'Nunca',
    modalCurrentStreak: 'Sequência atual',
    modalBestStreak: 'Melhor sequência',

    // FORMULÁRIO LOGIN
    formFillAll: 'Preencha todos os campos',
    formInvalidCode: 'Código de convite inválido',
    formPassMin: 'Senha: mínimo 6 caracteres',

    // SAUDAÇÃO
    dashGreeting: 'Olá,',

    // WELCOME
    welcomeStreakLabel: 'dias de sequência',

    // NÍVEIS inline
    levelInitial: 'Nível inicial',
    levelFrom: 'A partir de {pts} pts',

    // RANKING subtítulo
    rankMonthSub: 'Top alunos do L Body · ',

    // WEEKLY
    weeklySeq: 'Sequência: {streak} dias - {pts} pts',

    // RECOVERY
    recoveryMsg: 'Faça <strong style="color:var(--white)" id="recovery-meals-needed">3 refeições</strong> hoje para recuperar sua sequência!',
    // WELCOME SCREEN
    welcomeGreeting: 'Bem-vindo de volta,',

    // RANKING TABS
    rankTabMonth: 'Mês atual',
    rankTabTotal: 'Pontuação Geral',
    rankTabHistory: 'Meses anteriores',

    // FEED - mensagens
    feedTreino: 'concluiu mais um treino! O time não para 💪',
    feedCafe: 'começou o dia com disciplina! Foco total ☀️',
    feedLanche: 'não deixou passar o lanche! Consistência em ação 🥗',
    feedAlmoco: 'seguiu firme no almoço! Alimentação é treino também 🍽️',
    feedJantar: 'fechou o dia com chave de ouro! Missão cumprida 🌙',
    feedCardio: 'concluiu mais um cardio! Resistência elevada 🏃',
    feedHidratacao: 'garantiu a hidratação do dia! Corpo em alta performance 💧',
    feedFrutas: 'caprichou na alimentação saudável! 🍎',
    feedMission: 'concluiu a missão: {extra} ⚡',
    feedBadge: 'desbloqueou a conquista: {extra} 🎖️',
    feedLevelup: 'subiu para o nível {extra}! 🏆',
    feedWeight: 'registrou o peso hoje ⚖️',
    feedFoto1: 'postou o treino no feed 📸',
    feedFoto2: 'compartilhou o treino de hoje 💪📸',
    feedDefault: 'fez algo incrível!',
    feedAgo: ' atrás',

    // PERFIL - placeholders e labels
    calBestLabel: 'Melhor:',
    calCurrentLabel: 'Atual:',
    placeholderEmail: 'seu@email.com',
    placeholderName: 'Seu nome',
    placeholderPassMin: 'Mínimo 6 caracteres',
    placeholderWeightGoal: 'Meta em kg (ex: 70)',
    placeholderCurrentPass: 'Senha atual',
    placeholderNewPass: 'Nova senha (mínimo 6 caracteres)',
    placeholderConfirmPass: 'Senha atual (para confirmar)',
    placeholderNewEmail: 'Novo e-mail',
    placeholderSearch: 'Buscar aluno...',
    placeholderMessage: 'Digite sua mensagem para o aluno...',
    saveBtn: 'Salvar',
    weightRegisterCheckin: 'Registre seu peso nos check-ins para ver a evolução aqui!',
    weightGoalDesc: 'Defina uma meta de peso para acompanhar seu progresso!',
    weightCurrent: 'Peso atual',
    weightVsStart: 'vs início',
    weightStable: 'Estável',
    recoveryMealsNone: 'mais nenhuma refeição',
    recoveryMeal: 'refeição',
    recoveryMeals: 'refeições',



  },

  en: {
    // GENERAL
    appName: 'L Body',
    loading: 'LOADING...',
    save: 'Save',
    cancel: 'Cancel',
    update: 'Update',
    back: 'Back to start',
    copy: 'Copy',
    send: 'Send',
    refresh: 'Refresh',
    pts: 'pts',
    days: 'days',
    today: 'Today',
    yesterday: 'Yesterday',
    daysAgo: ' days ago',
    points: 'points',

    // LOGIN
    loginSlogan: '',
    loginTabSign: 'Sign In',
    loginTabCreate: 'Register',
    loginTabProf: 'Coach',
    loginEmail: 'Email',
    loginPass: 'Password',
    loginBtn: 'Sign In',
    loginError: 'Incorrect email or password',
    loginName: 'Full name',
    loginCode: 'Invite code',
    loginCreateBtn: 'Create account',
    loginCreateError: 'Error creating account',
    loginEmailTaken: 'Email already registered',
    loginAdminPass: 'Coach password',
    loginAdminBtn: 'Access panel',
    loginAdminError: 'Incorrect password',
    loginEntering: 'Signing in...',
    loginCreating: 'Creating account...',

    // DASHBOARD
    dashHello: 'Hello,',
    dashCheckin: "Today's check-in",
    dashMission: 'Daily mission',
    dashMissionDone: 'Mission completed',
    dashCompleteMission: 'Complete mission',
    dashStories: "Today's workouts",
    dashYourStory: 'Your workout',
    dashStreakBroken: 'Streak broken!',
    dashStreakRecovery: 'Complete 3 meals today to recover your streak!',

    // CHECKIN
    checkinTreino: 'Workout done',
    checkinCardio: 'Daily cardio',
    checkinCafe: 'Breakfast on track',
    checkinLanche: 'Afternoon snack on track',
    checkinAlmoco: 'Lunch on track',
    checkinJantar: 'Dinner on track',
    checkinHidra: 'Daily hydration',
    checkinFrutas: 'Ate fruits or veggies today',

    // STATS
    statStreak: 'Streak',
    statTrainings: 'Workouts',
    statRanking: 'Ranking',

    // RANKING
    rankingTitle: 'Ranking',
    rankTabMonth: 'This month',
    rankTabTotal: 'Overall Score',
    rankTabHistory: 'Previous months',
    rankingMonthLabel: 'Top students of L Body · ',
    rankingTotalTitle: 'Overall Score',
    rankingTotalSub: 'Accumulated score since the beginning',
    rankingNoData: 'No data yet.',

    // BADGES
    badgesTitle: 'Achievements',
    badgesSubtitle: 'Unlock all badges',
    badgesUnlocked: 'Unlocked achievements',
    viewAllLevels: 'View all levels',
    levelsTitle: 'Levels Table',

    // PROFILE / CALENDAR
    streakHeader: 'Streak — last 30 days',
    calCurrent: 'Current',
    calBest: 'Best',
    calFullDay: 'Full day',
    calNoRecord: 'No record',
    weightEvolution: 'Weight progress',
    weightRegister: 'Log your weight to see your progress here!',
    registerBtn: 'Log',
    weightGoal: 'Weight goal',
    statsTitle: 'My statistics',
    statsTotalPts: 'Total points',
    statsTrainings: 'Workouts done',
    statsBestStreak: 'Best streak',
    statsBadges: 'Achievements',
    profileUpdatingPhoto: 'Updating photo...',
    profileSettings: 'Account settings',
    profileEditName: 'Display name',
    profileEmail: 'Change email',
    profileUpdateEmail: 'Update email',
    profilePass: 'Change password',
    profileUpdatePass: 'Update password',
    profileLogout: 'Sign out',

    // CHAT / FEED
    chatTitle: 'Team Chat',
    chatSubtitle: 'L Body Group',
    chatPlaceholder: 'Message...',
    chatLoading: 'Loading messages...',
    feedTitle: 'Team Feed',
    feedSubtitle: "What's happening at L Body",
    feedLoading: 'Loading...',

    // NAV
    navHome: 'Home',
    navRanking: 'Ranking',
    navBadges: 'Achievements',
    navFeed: 'Feed',
    navChat: 'Chat',
    navProfile: 'Profile',

    // ADMIN
    adminTitle: 'PANEL',
    adminProf: 'COACH',
    adminLogout: 'Sign out',
    adminHello: 'Hello,',
    adminSub: 'L Body',
    topExit: 'Exit',
    rankingTab: 'Ranking',
    weeklyTab: 'Weekly',
    feedTab: 'Feed',
    chatTab: 'Chat',
    messagesTab: 'Messages',
    adminTotalStudents: 'Total students',
    activeToday: 'Active today',
    adminAvgPts: 'Avg points',
    workoutsToday: 'Workouts today',
    adminRankTitle: 'Full ranking',
    adminRefresh: 'Refresh',
    adminResetMonth: 'Reset Month',
    fixHallBtn: 'Fix Hall',
    tiebreakBtn: 'Tiebreak',
    filterAll: 'All',
    filterActive: 'Active',
    filterPending: 'Pending',
    filterBlocked: 'Blocked',
    filterInactive: 'Inactive',
    adminLoading: 'Loading...',
    adminColStudent: 'Student',
    adminColPts: 'Pts',
    adminColAction: 'Action',
    weeklyTitle: 'Weekly report',
    weeklyRefresh: 'Refresh',
    weeklyLoading: 'Loading...',
    messagesTitle: 'Sent messages',
    messagesEmpty: 'No messages sent yet.',
    inviteTitle: 'Invite code',
    inviteCode: 'TEAMLIRA',
    inviteCopy: 'Copy',
    inviteShare: 'Share with new students',
    adminWaitingApproval: 'Awaiting approval',

    // WELCOME / PENDING / BLOCKED
    welcomeBack: 'Welcome back,',
    streakDays: 'day streak',
    goTrain: "LET'S TRAIN 💪",
    pendingTitle: 'Registration submitted!',
    pendingMsg: 'Your registration is awaiting coach approval.<br><br>You will get access soon. Try signing in again later.',
    accessBlocked: 'Access blocked',
    blockedMsg: 'Your account has been blocked by the coach.<br>Contact us for more information.',

    // MODAL
    modalDetails: 'Details',
    approveStudent: 'Approve student',
    blockStudent: 'Block student',
    sendMessage: 'Send message',
    messageFor: 'Message to',
    sendBtn: 'Send message',
    modalTotalPts: 'Total points',

    // HALL OF FAME
    fixHallOfFame: 'Fix Hall of Fame',
    firstPlace: '🥇 1st Place',
    secondPlace: '🥈 2nd Place',
    thirdPlace: '🥉 3rd Place',

    // RANK ORDER
    rankOrder: 'Ranking order',
    rankOrderHelp: 'Use ▲▼ to reorder in case of a tie',

    // WEEKLY REPORT
    weeklyReport: 'Weekly Report',

    // CELEBRATIONS / TOASTS
    celebLevelUp: 'LEVELED UP!',
    celebWorkout: 'Workout Done!',
    celebWorkoutMsg: ' points! Keep it up!',
    celebBadge: '🎖️ New Achievement!',
    celebMission: 'Mission Complete!',
    celebMissionMsg: ' points! ',
    celebContinue: 'Continue 🚀',
    celebWow: 'Amazing!',
    celebYouRocked: 'You crushed it!',
    celebLevelTitle: 'LEVELED UP!',
    celebLevelSub: 'Keep going! 🔥',
    celebLevelWow: 'Woohoo! 🎉',
    celebLevelChampion: 'Champion',

    // TOASTS
    toastCheckinDone: 'Check-in done! +{pts} pts 💪',
    toastCheckinError: 'Error saving check-in.',
    toastWeightInvalid: 'Invalid weight (20–300 kg).',
    toastWeightSaved: 'Weight logged!',
    toastGoalSaved: 'Goal saved!',
    toastMonthReset: 'Month reset successfully!',
    toastMonthResetError: 'Error: ',
    toastSelectStudents: 'Select the winners.',
    toastHallSaved: 'Hall of Fame saved!',
    toastHallError: 'Error: ',
    toastOrderSaved: 'Order saved!',
    toastOrderError: 'Error: ',
    toastCodeCopied: 'Code copied!',
    toastNameSaved: 'Name updated!',
    toastEmailSaved: 'Email updated!',
    toastPassSaved: 'Password updated!',
    toastPhotoSaved: 'Photo updated!',
    toastPhraseUpdated: 'Phrase updated!',
    toastPhraseAuto: 'Back to automatic phrase.',

    // DATES
    dateWeekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    dateMonths: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    dateMonthsFull: ['January','February','March','April','May','June','July','August','September','October','November','December'],

    // POINTS
    faltam: 'Need ',
    ptsText: ' pts',
    diasText: ' days',
    maxLevel: 'Max level!',
    confirmReset: 'Reset points for the current month for ALL students? This action cannot be undone.',
    // DATE FORMAT
    dateOf: ' ',
    dateFormat: '{weekday}, {month} {day}',

    // MISSIONS
    missionComplete: 'Complete (+{pts} pts)',
    missionDone: 'Mission done!',

    // BADGE CATEGORIES
    catTreino: 'Workout',
    catSequencia: 'Streak',
    catAlimentacao: 'Nutrition',
    catPeso: 'Weight',
    catPontuacao: 'Points',
    catRanking: 'Ranking',
    catHidratacao: 'Hydration',
    catEngajamento: 'Engagement',
    badgesUnlockedLabel: 'Unlocked achievements',
    badgeUnlocked: 'UNLOCKED',

    // RANKING inline
    rankSeq: ' day streak',
    rankSub: ' · ',

    // MODAL ADMIN
    modalLastCheckin: 'Last check-in',
    modalNever: 'Never',
    modalCurrentStreak: 'Current streak',
    modalBestStreak: 'Best streak',

    // FORM
    formFillAll: 'Fill in all fields',
    formInvalidCode: 'Invalid invite code',
    formPassMin: 'Password: minimum 6 characters',

    // GREETING
    dashGreeting: 'Hello,',

    // WELCOME
    welcomeStreakLabel: 'day streak',

    // LEVELS inline
    levelInitial: 'Starting level',
    levelFrom: 'From {pts} pts',

    // RANKING subtitle
    rankMonthSub: 'Top students of L Body · ',

    // WEEKLY
    weeklySeq: 'Streak: {streak} days - {pts} pts',

    // RECOVERY
    recoveryMsg: 'Complete <strong style="color:var(--white)" id="recovery-meals-needed">3 meals</strong> today to recover your streak!',
    // WELCOME SCREEN
    welcomeGreeting: 'Welcome back,',

    // RANKING TABS
    rankTabMonth: 'This month',
    rankTabTotal: 'Overall Score',
    rankTabHistory: 'Previous months',

    // FEED
    feedTreino: 'completed another workout! The team never stops 💪',
    feedCafe: 'started the day with discipline! Full focus ☀️',
    feedLanche: 'didn\'t skip the snack! Consistency in action 🥗',
    feedAlmoco: 'stayed on track at lunch! Nutrition is training too 🍽️',
    feedJantar: 'closed the day perfectly! Mission accomplished 🌙',
    feedCardio: 'completed another cardio session! Endurance rising 🏃',
    feedHidratacao: 'nailed hydration today! Body at peak performance 💧',
    feedFrutas: 'ate healthy today! 🍎',
    feedMission: 'completed the mission: {extra} ⚡',
    feedBadge: 'unlocked the achievement: {extra} 🎖️',
    feedLevelup: 'leveled up to {extra}! 🏆',
    feedWeight: 'logged weight today ⚖️',
    feedFoto1: 'posted a workout on the feed 📸',
    feedFoto2: 'shared today\'s workout 💪📸',
    feedDefault: 'did something amazing!',
    feedAgo: ' ago',

    // PROFILE
    calBestLabel: 'Best:',
    calCurrentLabel: 'Current:',
    placeholderEmail: 'your@email.com',
    placeholderName: 'Your name',
    placeholderPassMin: 'Minimum 6 characters',
    placeholderWeightGoal: 'Goal in kg (e.g. 70)',
    placeholderCurrentPass: 'Current password',
    placeholderNewPass: 'New password (minimum 6 characters)',
    placeholderConfirmPass: 'Current password (to confirm)',
    placeholderNewEmail: 'New e-mail',
    placeholderSearch: 'Search student...',
    placeholderMessage: 'Type your message to the student...',
    saveBtn: 'Save',
    weightRegisterCheckin: 'Log your weight in check-ins to see your progress here!',
    weightGoalDesc: 'Set a weight goal to track your progress!',
    weightCurrent: 'Current weight',
    weightVsStart: 'vs start',
    weightStable: 'Stable',
    recoveryMealsNone: 'no more meals needed',
    recoveryMeal: 'meal',
    recoveryMeals: 'meals',



  },

  es: {
    // GENERAL
    appName: 'L Body',
    loading: 'CARGANDO...',
    save: 'Guardar',
    cancel: 'Cancelar',
    update: 'Actualizar',
    back: 'Volver al inicio',
    copy: 'Copiar',
    send: 'Enviar',
    refresh: 'Actualizar',
    pts: 'pts',
    days: 'días',
    today: 'Hoy',
    yesterday: 'Ayer',
    daysAgo: ' días atrás',
    points: 'puntos',

    // LOGIN
    loginSlogan: '',
    loginTabSign: 'Entrar',
    loginTabCreate: 'Registrarse',
    loginTabProf: 'Prof.',
    loginEmail: 'Email',
    loginPass: 'Contraseña',
    loginBtn: 'Entrar',
    loginError: 'Email o contraseña incorrectos',
    loginName: 'Nombre completo',
    loginCode: 'Código de invitación',
    loginCreateBtn: 'Crear cuenta',
    loginCreateError: 'Error al crear cuenta',
    loginEmailTaken: 'Email ya registrado',
    loginAdminPass: 'Contraseña del profesor',
    loginAdminBtn: 'Acceder al panel',
    loginAdminError: 'Contraseña incorrecta',
    loginEntering: 'Entrando...',
    loginCreating: 'Creando cuenta...',

    // DASHBOARD
    dashHello: '¡Hola,',
    dashCheckin: 'Check-in de hoy',
    dashMission: 'Misión del día',
    dashMissionDone: 'Misión completada',
    dashCompleteMission: 'Completar misión',
    dashStories: 'Entrenamientos de hoy',
    dashYourStory: 'Tu entrenamiento',
    dashStreakBroken: '¡Racha rota!',
    dashStreakRecovery: '¡Haz 3 comidas hoy para recuperar tu racha!',

    // CHECKIN
    checkinTreino: 'Entrenamiento completado',
    checkinCardio: 'Cardio del día',
    checkinCafe: 'Desayuno seguido',
    checkinLanche: 'Merienda seguida',
    checkinAlmoco: 'Almuerzo seguido',
    checkinJantar: 'Cena seguida',
    checkinHidra: 'Hidratación del día',
    checkinFrutas: 'Comí frutas o vegetales hoy',

    // STATS
    statStreak: 'Racha',
    statTrainings: 'Entrenamientos',
    statRanking: 'Ranking',

    // RANKING
    rankingTitle: 'Ranking',
    rankTabMonth: 'Este mes',
    rankTabTotal: 'Puntuación General',
    rankTabHistory: 'Meses anteriores',
    rankingMonthLabel: 'Top alumnos de L Body · ',
    rankingTotalTitle: 'Puntuación General',
    rankingTotalSub: 'Puntuación acumulada desde el inicio',
    rankingNoData: 'Sin datos aún.',

    // BADGES
    badgesTitle: 'Logros',
    badgesSubtitle: 'Desbloquea todas las medallas',
    badgesUnlocked: 'Logros desbloqueados',
    viewAllLevels: 'Ver todos los niveles',
    levelsTitle: 'Tabla de Niveles',

    // PROFILE / CALENDAR
    streakHeader: 'Racha — últimos 30 días',
    calCurrent: 'Actual',
    calBest: 'Mejor',
    calFullDay: 'Día completo',
    calNoRecord: 'Sin registro',
    weightEvolution: 'Evolución del peso',
    weightRegister: '¡Registra tu peso para ver la evolución aquí!',
    registerBtn: 'Registrar',
    weightGoal: 'Meta de peso',
    statsTitle: 'Mis estadísticas',
    statsTotalPts: 'Total de puntos',
    statsTrainings: 'Entrenamientos realizados',
    statsBestStreak: 'Mejor racha',
    statsBadges: 'Logros',
    profileUpdatingPhoto: 'Actualizando foto...',
    profileSettings: 'Configuración de cuenta',
    profileEditName: 'Nombre de perfil',
    profileEmail: 'Cambiar email',
    profileUpdateEmail: 'Actualizar email',
    profilePass: 'Cambiar contraseña',
    profileUpdatePass: 'Actualizar contraseña',
    profileLogout: 'Cerrar sesión',

    // CHAT / FEED
    chatTitle: 'Chat del Equipo',
    chatSubtitle: 'Grupo L Body',
    chatPlaceholder: 'Mensaje...',
    chatLoading: 'Cargando mensajes...',
    feedTitle: 'Feed del Equipo',
    feedSubtitle: 'Lo que está pasando en L Body',
    feedLoading: 'Cargando...',

    // NAV
    navHome: 'Inicio',
    navRanking: 'Ranking',
    navBadges: 'Logros',
    navFeed: 'Feed',
    navChat: 'Chat',
    navChat: 'Chat',
    navProfile: 'Perfil',

    // ADMIN
    adminTitle: 'PANEL',
    adminProf: 'PROF',
    adminLogout: 'Salir',
    adminHello: '¡Hola,',
    adminSub: 'L Body',
    topExit: 'Salir',
    rankingTab: 'Ranking',
    weeklyTab: 'Semanal',
    feedTab: 'Feed',
    chatTab: 'Chat',
    messagesTab: 'Mensajes',
    adminTotalStudents: 'Total alumnos',
    activeToday: 'Activos hoy',
    adminAvgPts: 'Promedio puntos',
    workoutsToday: 'Entrenamientos hoy',
    adminRankTitle: 'Ranking completo',
    adminRefresh: 'Actualizar',
    adminResetMonth: 'Reiniciar Mes',
    fixHallBtn: 'Corregir Hall',
    tiebreakBtn: 'Desempate',
    filterAll: 'Todos',
    filterActive: 'Activos',
    filterPending: 'Pendientes',
    filterBlocked: 'Bloqueados',
    filterInactive: 'Inactivos',
    adminLoading: 'Cargando...',
    adminColStudent: 'Alumno',
    adminColPts: 'Pts',
    adminColAction: 'Acción',
    weeklyTitle: 'Reporte semanal',
    weeklyRefresh: 'Actualizar',
    weeklyLoading: 'Cargando...',
    messagesTitle: 'Mensajes enviados',
    messagesEmpty: 'Ningún mensaje enviado aún.',
    inviteTitle: 'Código de invitación',
    inviteCode: 'TEAMLIRA',
    inviteCopy: 'Copiar',
    inviteShare: 'Comparte con nuevos alumnos',
    adminWaitingApproval: 'Esperando aprobación',

    // WELCOME / PENDING / BLOCKED
    welcomeBack: 'Bienvenido de vuelta,',
    streakDays: 'días de racha',
    goTrain: 'A ENTRENAR',
    pendingTitle: '¡Registro enviado!',
    pendingMsg: 'Tu registro está esperando aprobación del profesor.<br><br>Recibirás acceso pronto. Intenta entrar nuevamente más tarde.',
    accessBlocked: 'Acceso bloqueado',
    blockedMsg: 'Tu cuenta fue bloqueada por el profesor.<br>Contáctanos para más información.',

    // MODAL
    modalDetails: 'Detalles',
    approveStudent: 'Aprobar alumno',
    blockStudent: 'Bloquear alumno',
    sendMessage: 'Enviar mensaje',
    messageFor: 'Mensaje para',
    sendBtn: 'Enviar mensaje',
    modalTotalPts: 'Total de puntos',

    // HALL OF FAME
    fixHallOfFame: 'Corregir Hall of Fame',
    firstPlace: '🥇 1° Lugar',
    secondPlace: '🥈 2° Lugar',
    thirdPlace: '🥉 3° Lugar',

    // RANK ORDER
    rankOrder: 'Orden del Ranking',
    rankOrderHelp: 'Usa ▲▼ para reordenar en caso de empate',

    // WEEKLY REPORT
    weeklyReport: 'Reporte Semanal',

    // CELEBRATIONS
    celebLevelUp: '¡SUBIÓ DE NIVEL!',
    celebWorkout: '¡Entrenamiento Listo!',
    celebWorkoutMsg: ' puntos! ¡Sigue así!',
    celebBadge: '🎖️ ¡Nuevo Logro!',
    celebMission: '¡Misión Completada!',
    celebMissionMsg: ' puntos! ',
    celebContinue: 'Continuar 🚀',
    celebWow: '¡Increíble!',
    celebYouRocked: '¡Lo lograste!',
    celebLevelTitle: '¡SUBIÓ DE NIVEL!',
    celebLevelSub: '¡Sigue así! 🔥',
    celebLevelWow: '¡Genial! 🎉',
    celebLevelChampion: 'Campeón',

    // TOASTS
    toastCheckinDone: '¡Check-in hecho! +{pts} pts 💪',
    toastCheckinError: 'Error al guardar check-in.',
    toastWeightInvalid: 'Peso inválido (20–300 kg).',
    toastWeightSaved: '¡Peso registrado!',
    toastGoalSaved: '¡Meta guardada!',
    toastMonthReset: '¡Mes reiniciado con éxito!',
    toastMonthResetError: 'Error: ',
    toastSelectStudents: 'Selecciona los ganadores.',
    toastHallSaved: '¡Hall of Fame guardado!',
    toastHallError: 'Error: ',
    toastOrderSaved: '¡Orden guardado!',
    toastOrderError: 'Error: ',
    toastCodeCopied: '¡Código copiado!',
    toastNameSaved: '¡Nombre actualizado!',
    toastEmailSaved: '¡Email actualizado!',
    toastPassSaved: '¡Contraseña actualizada!',
    toastPhotoSaved: '¡Foto actualizada!',
    toastPhraseUpdated: '¡Frase actualizada!',
    toastPhraseAuto: 'Volvió a frase automática.',

    // DATES
    dateWeekdays: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    dateMonths: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    dateMonthsFull: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],

    // POINTS
    faltam: 'Faltan ',
    ptsText: ' pts',
    diasText: ' días',
    maxLevel: '¡Nivel máximo!',
    confirmReset: '¿Reiniciar puntos del mes actual de TODOS los alumnos? Esta acción no se puede deshacer.',
    // FORMATO DE FECHA
    dateOf: ' de ',
    dateFormat: '{weekday}, {day} de {month}',

    // MISIONES
    missionComplete: 'Completar (+{pts} pts)',
    missionDone: '¡Misión completada!',

    // CATEGORÍAS BADGES
    catTreino: 'Entrenamiento',
    catSequencia: 'Racha',
    catAlimentacao: 'Alimentación',
    catPeso: 'Peso',
    catPontuacao: 'Puntuación',
    catRanking: 'Ranking',
    catHidratacao: 'Hidratación',
    catEngajamento: 'Participación',
    badgesUnlockedLabel: 'Logros desbloqueados',
    badgeUnlocked: 'DESBLOQUEADO',

    // RANKING inline
    rankSeq: ' días de racha',
    rankSub: ' · ',

    // MODAL ADMIN
    modalLastCheckin: 'Último check-in',
    modalNever: 'Nunca',
    modalCurrentStreak: 'Racha actual',
    modalBestStreak: 'Mejor racha',

    // FORMULARIO
    formFillAll: 'Completa todos los campos',
    formInvalidCode: 'Código de invitación inválido',
    formPassMin: 'Contraseña: mínimo 6 caracteres',

    // SALUDO
    dashGreeting: '¡Hola,',

    // WELCOME
    welcomeStreakLabel: 'días de racha',

    // NIVELES inline
    levelInitial: 'Nivel inicial',
    levelFrom: 'Desde {pts} pts',

    // RANKING subtítulo
    rankMonthSub: 'Top alumnos de L Body · ',

    // WEEKLY
    weeklySeq: 'Racha: {streak} días - {pts} pts',

    // RECOVERY
    recoveryMsg: 'Haz <strong style="color:var(--white)" id="recovery-meals-needed">3 comidas</strong> hoy para recuperar tu racha.',
    // WELCOME SCREEN
    welcomeGreeting: '¡Bienvenido de vuelta,',

    // RANKING TABS
    rankTabMonth: 'Este mes',
    rankTabTotal: 'Puntuación General',
    rankTabHistory: 'Meses anteriores',

    // FEED
    feedTreino: '¡completó otro entrenamiento! El equipo no para 💪',
    feedCafe: '¡empezó el día con disciplina! Foco total ☀️',
    feedLanche: '¡no se saltó la merienda! Consistencia en acción 🥗',
    feedAlmoco: '¡siguió firme en el almuerzo! La nutrición también es entrenamiento 🍽️',
    feedJantar: '¡cerró el día perfectamente! Misión cumplida 🌙',
    feedCardio: '¡completó otro cardio! Resistencia elevada 🏃',
    feedHidratacao: '¡garantizó la hidratación del día! Cuerpo en alto rendimiento 💧',
    feedFrutas: '¡se cuidó con la alimentación saludable! 🍎',
    feedMission: 'completó la misión: {extra} ⚡',
    feedBadge: 'desbloqueó el logro: {extra} 🎖️',
    feedLevelup: 'subió al nivel {extra}! 🏆',
    feedWeight: 'registró el peso hoy ⚖️',
    feedFoto1: 'publicó el entrenamiento en el feed 📸',
    feedFoto2: 'compartió el entrenamiento de hoy 💪📸',
    feedDefault: '¡hizo algo increíble!',
    feedAgo: ' atrás',

    // PROFILE
    calBestLabel: 'Mejor:',
    calCurrentLabel: 'Actual:',
    placeholderEmail: 'tu@email.com',
    placeholderName: 'Tu nombre',
    placeholderPassMin: 'Mínimo 6 caracteres',
    placeholderWeightGoal: 'Meta en kg (ej: 70)',
    placeholderCurrentPass: 'Contraseña actual',
    placeholderNewPass: 'Nueva contraseña (mínimo 6 caracteres)',
    placeholderConfirmPass: 'Contraseña actual (para confirmar)',
    placeholderNewEmail: 'Nuevo e-mail',
    placeholderSearch: 'Buscar alumno...',
    placeholderMessage: 'Escribe tu mensaje al alumno...',
    saveBtn: 'Guardar',
    weightRegisterCheckin: '¡Registra tu peso en los check-ins para ver tu evolución aquí!',
    weightGoalDesc: '¡Define una meta de peso para acompañar tu progreso!',
    weightCurrent: 'Peso actual',
    weightVsStart: 'vs inicio',
    weightStable: 'Estable',
    recoveryMealsNone: 'ninguna comida más necesaria',
    recoveryMeal: 'comida',
    recoveryMeals: 'comidas',



  }
};

// ===== NÍVEIS (traduzidos por idioma) =====
const LEVELS_DATA = {
  pt: [
    {name:'Iniciante',      badge:'🥉 Iniciante',      min:0,     max:500},
    {name:'Imparável',      badge:'⚡ Imparável',      min:500,   max:1500},
    {name:'Determinado',    badge:'💪 Determinado',    min:1500,  max:3000},
    {name:'Resistente',     badge:'🛡️ Resistente',     min:3000,  max:5000},
    {name:'Focado',         badge:'🎯 Focado',         min:5000, max:8000},
    {name:'Veloz',          badge:'🏃 Veloz',          min:8000, max:11500},
    {name:'Forte',          badge:'🦾 Forte',          min:11500, max:15500},
    {name:'Guerreiro',      badge:'⚔️ Guerreiro',      min:15500, max:20000},
    {name:'Combatente',     badge:'💥 Combatente',     min:20000, max:26000},
    {name:'Campeão',        badge:'🥈 Campeão',        min:26000, max:38000},
    {name:'Destaque',       badge:'🌟 Destaque',       min:38000, max:41000},
    {name:'Veterano',       badge:'🎖️ Veterano',       min:41000, max:43500},
    {name:'Especialista',   badge:'🏅 Especialista',   min:43500, max:45500},
    {name:'Elite',          badge:'🥇 Elite',          min:45500, max:47000},
    {name:'Mestre',         badge:'🔱 Mestre',         min:47000, max:48000},
    {name:'Grão Mestre',    badge:'👑 Grão Mestre',    min:48000, max:48800},
    {name:'Dominante',      badge:'🌙 Dominante',      min:48800, max:49300},
    {name:'Lendário',       badge:'💎 Lendário',       min:49300, max:49700},
    {name:'Extraordinário', badge:'💎 Extraordinário', min:49700, max:50000},
    {name:'Lenda Viva',     badge:'🌟 Lenda Viva',     min:50000, max:999999},
  ],
  en: [
    {name:'Beginner',       badge:'🥉 Beginner',       min:0,     max:500},
    {name:'Unstoppable',    badge:'⚡ Unstoppable',    min:500,   max:1500},
    {name:'Determined',     badge:'💪 Determined',     min:1500,  max:3000},
    {name:'Resilient',      badge:'🛡️ Resilient',      min:3000,  max:5000},
    {name:'Focused',        badge:'🎯 Focused',        min:5000, max:8000},
    {name:'Swift',          badge:'🏃 Swift',          min:8000, max:11500},
    {name:'Strong',         badge:'🦾 Strong',         min:11500, max:15500},
    {name:'Warrior',        badge:'⚔️ Warrior',        min:15500, max:20000},
    {name:'Fighter',        badge:'💥 Fighter',        min:20000, max:26000},
    {name:'Champion',       badge:'🥈 Champion',       min:26000, max:38000},
    {name:'Standout',       badge:'🌟 Standout',       min:38000, max:41000},
    {name:'Veteran',        badge:'🎖️ Veteran',        min:41000, max:43500},
    {name:'Specialist',     badge:'🏅 Specialist',     min:43500, max:45500},
    {name:'Elite',          badge:'🥇 Elite',          min:45500, max:47000},
    {name:'Master',         badge:'🔱 Master',         min:47000, max:48000},
    {name:'Grand Master',   badge:'👑 Grand Master',   min:48000, max:48800},
    {name:'Dominant',       badge:'🌙 Dominant',       min:48800, max:49300},
    {name:'Legendary',      badge:'💎 Legendary',      min:49300, max:49700},
    {name:'Extraordinary',  badge:'💎 Extraordinary',  min:49700, max:50000},
    {name:'Living Legend',  badge:'🌟 Living Legend',  min:50000, max:999999},
  ],
  es: [
    {name:'Principiante',   badge:'🥉 Principiante',   min:0,     max:500},
    {name:'Imparable',      badge:'⚡ Imparable',      min:500,   max:1500},
    {name:'Determinado',    badge:'💪 Determinado',    min:1500,  max:3000},
    {name:'Resistente',     badge:'🛡️ Resistente',     min:3000,  max:5000},
    {name:'Enfocado',       badge:'🎯 Enfocado',       min:5000, max:8000},
    {name:'Veloz',          badge:'🏃 Veloz',          min:8000, max:11500},
    {name:'Fuerte',         badge:'🦾 Fuerte',         min:11500, max:15500},
    {name:'Guerrero',       badge:'⚔️ Guerrero',       min:15500, max:20000},
    {name:'Combatiente',    badge:'💥 Combatiente',    min:20000, max:26000},
    {name:'Campeón',        badge:'🥈 Campeón',        min:26000, max:38000},
    {name:'Destacado',      badge:'🌟 Destacado',      min:38000, max:41000},
    {name:'Veterano',       badge:'🎖️ Veterano',       min:41000, max:43500},
    {name:'Especialista',   badge:'🏅 Especialista',   min:43500, max:45500},
    {name:'Elite',          badge:'🥇 Elite',          min:45500, max:47000},
    {name:'Maestro',        badge:'🔱 Maestro',        min:47000, max:48000},
    {name:'Gran Maestro',   badge:'👑 Gran Maestro',   min:48000, max:48800},
    {name:'Dominante',      badge:'🌙 Dominante',      min:48800, max:49300},
    {name:'Legendario',     badge:'💎 Legendario',     min:49300, max:49700},
    {name:'Extraordinario', badge:'💎 Extraordinario', min:49700, max:50000},
    {name:'Leyenda Viva',   badge:'🌟 Leyenda Viva',   min:50000, max:999999},
  ]
};

// ===== BADGES (traduzidos por idioma) =====
const BADGES_DATA = {
  pt: [
    {id:'train_1',    emoji:'💪', name:'Primeira Suada',      desc:'Realize seu 1° treino'},
    {id:'train_10',   emoji:'🔟', name:'Rotina Iniciada',     desc:'10 treinos realizados'},
    {id:'train_50',   emoji:'🏃', name:'Sem Desculpas',       desc:'50 treinos realizados'},
    {id:'train_100',  emoji:'⚡', name:'Máquina de Guerra',   desc:'100 treinos realizados'},
    {id:'train_200',  emoji:'🦾', name:'Atleta de Elite',     desc:'200 treinos realizados'},
    {id:'train_365',  emoji:'👑', name:'Lenda do Treino',     desc:'365 treinos realizados'},
    {id:'streak_3',   emoji:'🌱', name:'Primeiros Passos',    desc:'3 dias de sequência'},
    {id:'streak_7',   emoji:'🔥', name:'Pegando Fogo',        desc:'7 dias de sequência'},
    {id:'streak_30',  emoji:'💥', name:'Imparável',           desc:'30 dias de sequência'},
    {id:'streak_60',  emoji:'🚀', name:'Modo Berserk',        desc:'60 dias de sequência'},
    {id:'streak_100', emoji:'🌟', name:'Inabalável',          desc:'100 dias de sequência'},
    {id:'streak_180', emoji:'👑', name:'Lenda Viva',          desc:'180 dias de sequência'},
    {id:'meal_1',     emoji:'🥗', name:'Primeira Dieta',      desc:'1 dia com 3 refeições'},
    {id:'meal_15',    emoji:'🍱', name:'Consistência',        desc:'15 dias com 3 refeições'},
    {id:'meal_45',    emoji:'🥦', name:'Disciplina Total',    desc:'45 dias com 3 refeições'},
    {id:'meal_90',    emoji:'🍽️', name:'Nutri Aprovaria',    desc:'90 dias com 3 refeições'},
    {id:'meal_180',   emoji:'🏆', name:'Alimentação Campeão', desc:'180 dias com 3 refeições'},
    {id:'weight_1',   emoji:'⚖️', name:'Primeiro Registro',  desc:'Registre seu peso pela 1° vez'},
    {id:'weight_15',  emoji:'📊', name:'Acompanhando',        desc:'15 registros de peso'},
    {id:'weight_45',  emoji:'📈', name:'Evolução Constante',  desc:'45 registros de peso'},
    {id:'weight_90',  emoji:'🎯', name:'Meta Atingida',       desc:'90 registros de peso'},
    {id:'pts_500',    emoji:'⭐', name:'Começando',           desc:'Alcance 500 pts'},
    {id:'pts_2000',   emoji:'🌟', name:'Aquecendo',           desc:'Alcance 2.000 pts'},
    {id:'pts_5000',   emoji:'💫', name:'Em Chamas',           desc:'Alcance 5.000 pts'},
    {id:'pts_10000',  emoji:'🏅', name:'Alto Nível',          desc:'Alcance 10.000 pts'},
    {id:'pts_20000',  emoji:'🥇', name:'Elite',               desc:'Alcance 20.000 pts'},
    {id:'pts_50000',  emoji:'💎', name:'Lenda',               desc:'Alcance 50.000 pts'},
    {id:'rank_top3',  emoji:'🎖️', name:'Destaque do Mês',   desc:'Termine um mês no top 3'},
    {id:'rank_1st',   emoji:'🥇', name:'Campeão',            desc:'Termine um mês em 1° lugar'},
    {id:'rank_3x',    emoji:'👑', name:'Dinastia',            desc:'3 meses consecutivos em 1°'},
    {id:'hydra_15',   emoji:'💧', name:'Hidratado',           desc:'15 dias seguidos de hidratação'},
    {id:'hydra_30',   emoji:'🌊', name:'Sempre Hidratado',    desc:'30 dias seguidos de hidratação'},
    {id:'hydra_60',   emoji:'💎', name:'Hidratação de Elite', desc:'60 dias seguidos de hidratação'},
    {id:'story_1',    emoji:'📸', name:'Na Mídia',            desc:'Poste seu 1° story de treino'},
    {id:'chat_30',    emoji:'💬', name:'Voz do Time',         desc:'30 dias interagindo no chat'},
    {id:'app_60',     emoji:'🤝', name:'Pilar do Time',       desc:'60 dias de uso do app'},
    {id:'app_90',     emoji:'🏅', name:'Veterano',            desc:'90 dias de uso do app'},
    {id:'app_180',    emoji:'🌟', name:'Comprometido',        desc:'180 dias de uso do app'},
  ],
  en: [
    {id:'train_1',    emoji:'💪', name:'First Sweat',         desc:'Complete your 1st workout'},
    {id:'train_10',   emoji:'🔟', name:'Routine Started',     desc:'10 workouts completed'},
    {id:'train_50',   emoji:'🏃', name:'No Excuses',          desc:'50 workouts completed'},
    {id:'train_100',  emoji:'⚡', name:'War Machine',         desc:'100 workouts completed'},
    {id:'train_200',  emoji:'🦾', name:'Elite Athlete',       desc:'200 workouts completed'},
    {id:'train_365',  emoji:'👑', name:'Workout Legend',      desc:'365 workouts completed'},
    {id:'streak_3',   emoji:'🌱', name:'First Steps',         desc:'3-day streak'},
    {id:'streak_7',   emoji:'🔥', name:'On Fire',             desc:'7-day streak'},
    {id:'streak_30',  emoji:'💥', name:'Unstoppable',         desc:'30-day streak'},
    {id:'streak_60',  emoji:'🚀', name:'Berserk Mode',        desc:'60-day streak'},
    {id:'streak_100', emoji:'🌟', name:'Unshakeable',         desc:'100-day streak'},
    {id:'streak_180', emoji:'👑', name:'Living Legend',       desc:'180-day streak'},
    {id:'meal_1',     emoji:'🥗', name:'First Diet',          desc:'1 day with 3 meals'},
    {id:'meal_15',    emoji:'🍱', name:'Consistency',         desc:'15 days with 3 meals'},
    {id:'meal_45',    emoji:'🥦', name:'Total Discipline',    desc:'45 days with 3 meals'},
    {id:'meal_90',    emoji:'🍽️', name:'Nutrition Goal',     desc:'90 days with 3 meals'},
    {id:'meal_180',   emoji:'🏆', name:'Champion Diet',       desc:'180 days with 3 meals'},
    {id:'weight_1',   emoji:'⚖️', name:'First Log',          desc:'Log your weight for the 1st time'},
    {id:'weight_15',  emoji:'📊', name:'Tracking',            desc:'15 weight logs'},
    {id:'weight_45',  emoji:'📈', name:'Steady Progress',     desc:'45 weight logs'},
    {id:'weight_90',  emoji:'🎯', name:'Goal Reached',        desc:'90 weight logs'},
    {id:'pts_500',    emoji:'⭐', name:'Getting Started',     desc:'Reach 500 pts'},
    {id:'pts_2000',   emoji:'🌟', name:'Warming Up',          desc:'Reach 2,000 pts'},
    {id:'pts_5000',   emoji:'💫', name:'On Fire',             desc:'Reach 5,000 pts'},
    {id:'pts_10000',  emoji:'🏅', name:'High Level',          desc:'Reach 10,000 pts'},
    {id:'pts_20000',  emoji:'🥇', name:'Elite',               desc:'Reach 20,000 pts'},
    {id:'pts_50000',  emoji:'💎', name:'Legend',              desc:'Reach 50,000 pts'},
    {id:'rank_top3',  emoji:'🎖️', name:'Month Highlight',    desc:'Finish a month in top 3'},
    {id:'rank_1st',   emoji:'🥇', name:'Champion',           desc:'Finish a month in 1st place'},
    {id:'rank_3x',    emoji:'👑', name:'Dynasty',             desc:'3 consecutive months in 1st'},
    {id:'hydra_15',   emoji:'💧', name:'Hydrated',            desc:'15 consecutive hydration days'},
    {id:'hydra_30',   emoji:'🌊', name:'Always Hydrated',     desc:'30 consecutive hydration days'},
    {id:'hydra_60',   emoji:'💎', name:'Elite Hydration',     desc:'60 consecutive hydration days'},
    {id:'story_1',    emoji:'📸', name:'On the Map',          desc:'Post your 1st workout story'},
    {id:'chat_30',    emoji:'💬', name:'Team Voice',          desc:'30 days engaging in chat'},
    {id:'app_60',     emoji:'🤝', name:'Team Pillar',         desc:'60 days using the app'},
    {id:'app_90',     emoji:'🏅', name:'Veteran',             desc:'90 days using the app'},
    {id:'app_180',    emoji:'🌟', name:'Committed',           desc:'180 days using the app'},
  ],
  es: [
    {id:'train_1',    emoji:'💪', name:'Primer Sudor',        desc:'Realiza tu 1° entrenamiento'},
    {id:'train_10',   emoji:'🔟', name:'Rutina Iniciada',     desc:'10 entrenamientos realizados'},
    {id:'train_50',   emoji:'🏃', name:'Sin Excusas',         desc:'50 entrenamientos realizados'},
    {id:'train_100',  emoji:'⚡', name:'Máquina de Guerra',   desc:'100 entrenamientos realizados'},
    {id:'train_200',  emoji:'🦾', name:'Atleta de Elite',     desc:'200 entrenamientos realizados'},
    {id:'train_365',  emoji:'👑', name:'Leyenda del Gym',     desc:'365 entrenamientos realizados'},
    {id:'streak_3',   emoji:'🌱', name:'Primeros Pasos',      desc:'3 días de racha'},
    {id:'streak_7',   emoji:'🔥', name:'Ardiendo',            desc:'7 días de racha'},
    {id:'streak_30',  emoji:'💥', name:'Imparable',           desc:'30 días de racha'},
    {id:'streak_60',  emoji:'🚀', name:'Modo Berserk',        desc:'60 días de racha'},
    {id:'streak_100', emoji:'🌟', name:'Inquebrantable',      desc:'100 días de racha'},
    {id:'streak_180', emoji:'👑', name:'Leyenda Viva',        desc:'180 días de racha'},
    {id:'meal_1',     emoji:'🥗', name:'Primera Dieta',       desc:'1 día con 3 comidas'},
    {id:'meal_15',    emoji:'🍱', name:'Consistencia',        desc:'15 días con 3 comidas'},
    {id:'meal_45',    emoji:'🥦', name:'Disciplina Total',    desc:'45 días con 3 comidas'},
    {id:'meal_90',    emoji:'🍽️', name:'Nutri Aprobaría',    desc:'90 días con 3 comidas'},
    {id:'meal_180',   emoji:'🏆', name:'Dieta Campeón',       desc:'180 días con 3 comidas'},
    {id:'weight_1',   emoji:'⚖️', name:'Primer Registro',    desc:'Registra tu peso por 1° vez'},
    {id:'weight_15',  emoji:'📊', name:'Siguiendo',           desc:'15 registros de peso'},
    {id:'weight_45',  emoji:'📈', name:'Evolución Constante', desc:'45 registros de peso'},
    {id:'weight_90',  emoji:'🎯', name:'Meta Alcanzada',      desc:'90 registros de peso'},
    {id:'pts_500',    emoji:'⭐', name:'Comenzando',          desc:'Alcanza 500 pts'},
    {id:'pts_2000',   emoji:'🌟', name:'Calentando',          desc:'Alcanza 2.000 pts'},
    {id:'pts_5000',   emoji:'💫', name:'En Llamas',           desc:'Alcanza 5.000 pts'},
    {id:'pts_10000',  emoji:'🏅', name:'Alto Nivel',          desc:'Alcanza 10.000 pts'},
    {id:'pts_20000',  emoji:'🥇', name:'Elite',               desc:'Alcanza 20.000 pts'},
    {id:'pts_50000',  emoji:'💎', name:'Leyenda',             desc:'Alcanza 50.000 pts'},
    {id:'rank_top3',  emoji:'🎖️', name:'Destaque del Mes',  desc:'Termina un mes en el top 3'},
    {id:'rank_1st',   emoji:'🥇', name:'Campeón',            desc:'Termina un mes en 1° lugar'},
    {id:'rank_3x',    emoji:'👑', name:'Dinastía',            desc:'3 meses consecutivos en 1°'},
    {id:'hydra_15',   emoji:'💧', name:'Hidratado',           desc:'15 días seguidos de hidratación'},
    {id:'hydra_30',   emoji:'🌊', name:'Siempre Hidratado',   desc:'30 días seguidos de hidratación'},
    {id:'hydra_60',   emoji:'💎', name:'Hidratación Elite',   desc:'60 días seguidos de hidratación'},
    {id:'story_1',    emoji:'📸', name:'En los Medios',       desc:'Publica tu 1° story de entrenamiento'},
    {id:'chat_30',    emoji:'💬', name:'Voz del Equipo',      desc:'30 días interactuando en el chat'},
    {id:'app_60',     emoji:'🤝', name:'Pilar del Equipo',    desc:'60 días usando la app'},
    {id:'app_90',     emoji:'🏅', name:'Veterano',            desc:'90 días usando la app'},
    {id:'app_180',    emoji:'🌟', name:'Comprometido',        desc:'180 días usando la app'},
  ]
};


// ===== MISSÕES (traduzidas) =====
const MISSIONS_DATA = {
  pt: [
    {id:'agua',     emoji:'💧', title:'Beba 2 litros de água',           desc:'Hidratação é fundamental para a performance!',              pts:25},
    {id:'sono',     emoji:'😴', title:'Durma 8 horas esta noite',        desc:'O descanso é onde o corpo se reconstrói.',                  pts:25},
    {id:'proteina', emoji:'🥩', title:'Bata sua meta de proteína',       desc:'Proteína é o combustível dos músculos!',                    pts:30},
    {id:'passos',   emoji:'🚶', title:'Dê 8.000 passos hoje',            desc:'Movimento constante faz toda diferença.',                   pts:25},
    {id:'alongar',  emoji:'🧘', title:'Faça 10 min de alongamento',      desc:'Flexibilidade previne lesões e melhora a performance.',      pts:20},
    {id:'foto',     emoji:'📸', title:'Registre seu prato no diário',    desc:'Consciência alimentar é o primeiro passo!',                 pts:20},
    {id:'motivar',  emoji:'🤝', title:'Motive um colega do L Body',   desc:'Times fortes se apoiam mutuamente.',                        pts:30},
    {id:'descanso', emoji:'🛋️', title:'Respeite seu dia de descanso',   desc:'Recuperação é parte do treino!',                            pts:15},
  ],
  en: [
    {id:'agua',     emoji:'💧', title:'Drink 2 liters of water',         desc:'Hydration is key to performance!',                          pts:25},
    {id:'sono',     emoji:'😴', title:'Sleep 8 hours tonight',           desc:'Rest is where your body rebuilds.',                         pts:25},
    {id:'proteina', emoji:'🥩', title:'Hit your protein goal',           desc:'Protein is the fuel for your muscles!',                     pts:30},
    {id:'passos',   emoji:'🚶', title:'Take 8,000 steps today',          desc:'Constant movement makes all the difference.',               pts:25},
    {id:'alongar',  emoji:'🧘', title:'Do 10 min of stretching',         desc:'Flexibility prevents injuries and boosts performance.',      pts:20},
    {id:'foto',     emoji:'📸', title:'Log your meal in the journal',    desc:'Food awareness is the first step!',                         pts:20},
    {id:'motivar',  emoji:'🤝', title:'Motivate a L Body teammate',   desc:'Strong teams support each other.',                          pts:30},
    {id:'descanso', emoji:'🛋️', title:'Respect your rest day',          desc:'Recovery is part of the training!',                         pts:15},
  ],
  es: [
    {id:'agua',     emoji:'💧', title:'Bebe 2 litros de agua',           desc:'¡La hidratación es clave para el rendimiento!',             pts:25},
    {id:'sono',     emoji:'😴', title:'Duerme 8 horas esta noche',       desc:'El descanso es donde el cuerpo se reconstruye.',            pts:25},
    {id:'proteina', emoji:'🥩', title:'Alcanza tu meta de proteína',     desc:'¡La proteína es el combustible de tus músculos!',           pts:30},
    {id:'passos',   emoji:'🚶', title:'Da 8.000 pasos hoy',              desc:'El movimiento constante marca la diferencia.',               pts:25},
    {id:'alongar',  emoji:'🧘', title:'Haz 10 min de estiramiento',      desc:'La flexibilidad previene lesiones y mejora el rendimiento.', pts:20},
    {id:'foto',     emoji:'📸', title:'Registra tu plato en el diario',  desc:'¡La conciencia alimentaria es el primer paso!',             pts:20},
    {id:'motivar',  emoji:'🤝', title:'Motiva a un compañero del Team',  desc:'Los equipos fuertes se apoyan mutuamente.',                  pts:30},
    {id:'descanso', emoji:'🛋️', title:'Respeta tu día de descanso',     desc:'¡La recuperación es parte del entrenamiento!',              pts:15},
  ]
};

function getMissions() { return MISSIONS_DATA[currentLang] || MISSIONS_DATA['pt']; }

// ===== FRASES MOTIVACIONAIS (traduzidas) =====
const PHRASES_DATA = {
  pt: [
    "A dor de hoje é a força de amanhã. 💪",
    "Disciplina é a ponte entre metas e conquistas. 🏆",
    "Seu corpo pode suportar quase tudo. É sua mente que você precisa convencer. 🧠",
    "Não pare quando estiver cansado. Pare quando terminar. 🔥",
    "Cada treino é um passo mais perto do seu objetivo. 👣",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia. ⚡",
    "Seja mais forte do que suas desculpas. 💥",
    "Transformação não acontece na zona de conforto. 🚀",
    "Você não precisa ser perfeito, precisa ser consistente. 🎯",
    "O único treino ruim é o que não foi feito. 💪",
    "Sua maior competição é quem você era ontem. 🏅",
    "Resultados não mentem. Continue. 📈",
    "Foco, força e fé. Todo dia. 🙏",
    "Um dia de cada vez. Um treino de cada vez. ✅",
    "A mudança começa quando o desconforto supera o medo. 🔑",
    "Invista em você. É o melhor investimento que existe. 💎",
    "Corpos são construídos na academia, mas esculpidos na cozinha. 🥗",
    "Não espere motivação. Crie disciplina. ⚙️",
    "Cada escolha certa te aproxima do seu objetivo. 🎯",
    "O segredo é começar. O resto vem com o tempo. ⏳",
    "Consistência bate intensidade. Todo dia. 🔄",
    "Sua versão futura está te agradecendo por cada treino de hoje. 🙌",
    "LETS GO! Hoje é dia de evoluir. 🏆",
    "L Body. Juntos somos mais fortes. ❤️",
    "Acredite no processo. Os resultados vêm. 🌱",
    "Mais um dia, mais uma chance de ser melhor. ☀️",
    "A dieta de hoje é o corpo de amanhã. 🥩",
    "Não existe atalho. Existe dedicação. 💪",
    "Você chegou até aqui. Não pare agora. 🔥",
    "Todo campeão já foi um iniciante. 🌟",
    "Quem treina hoje não precisa se arrepender amanhã. 💪",
    "Pequenos hábitos, grandes transformações. 🌱",
    "O treino que você faz sem vontade é o que mais conta. 🔥",
    "Não compare o seu começo com o meio de ninguém. 🛤️",
    "A constância vence o talento quando o talento não aparece. 🎯",
    "Seu corpo ouve tudo o que sua mente diz. Fale bem com ele. 🧠",
    "Descansar também faz parte do treino. Recuperar é evoluir. 😴",
    "Água, sono e comida de verdade: a base de tudo. 💧",
    "Hoje você só precisa começar. O resto vai embora com o primeiro exercício. ▶️",
    "Treinar é um presente que você dá para o seu futuro. 🎁",
    "Cada repetição é um voto no tipo de pessoa que você quer ser. 🗳️",
    "Evolução não tem pressa, mas não tem folga. ⏱️",
    "A carga sobe quando a sua confiança sobe. 📈",
    "Foque no que você pode controlar: o próximo treino. 🎯",
    "Não é sobre ser o melhor. É sobre ser melhor que ontem. 🏅",
    "A balança é só um número. O seu esforço é o que importa. ⚖️",
    "Cuide do corpo. Ele é o único lugar onde você vai morar para sempre. 🏠",
    "Quando o treino pesa, é porque você está crescendo. 🌳",
    "Respeite o processo. Ele vai respeitar você de volta. 🤝",
    "Ninguém se arrepende de ter treinado. 💯",
    "Hoje é um ótimo dia para surpreender o seu eu de ontem. ✨",
    "Alimentação organizada é meio caminho andado. 🍽️",
    "A motivação te faz começar. O hábito te faz continuar. 🔁",
    "Aquele último exercício é o que separa o bom do ótimo. 🏆",
    "Treine com a cabeça, não só com os músculos. 🧩",
    "O que você faz todo dia pesa mais do que o que você faz de vez em quando. 📅",
    "Dias difíceis constroem pessoas fortes. 🛡️",
    "Seja paciente com o seu corpo e exigente com a sua rotina. ⚙️",
    "Sua única obrigação hoje é dar o seu melhor. 🙌",
    "O corpo muda aos poucos. A autoestima muda primeiro. 😊",
    "Um treino curto vale mais que um treino perfeito que não acontece. ⏳",
    "Comece como você está. Evolua como você quer. 🚀",
    "Saúde é o investimento que rende todos os dias. 💎",
    "Cada gota de suor é um tijolo da sua melhor versão. 🧱",
    "Sorria, você escolheu cuidar de você. 😁",
    "Meta grande se constrói com tarefa pequena todo dia. 🏗️",
    "Quem planeja a semana vence a preguiça de segunda. 📝",
    "Boa técnica hoje, carga maior amanhã. 🔧",
    "Respire, foque e execute. 🌬️",
    "O melhor momento para treinar foi ontem. O segundo melhor é agora. ⏰",
    "Orgulhe-se de cada dia em que você apareceu. 👏",
    "Não é castigo, é cuidado. Treine por amor ao seu corpo. ❤️",
    "A força que você procura está na próxima série. 💪",
    "Menos desculpa, mais repetição. 🔄",
    "Vai doer parar, mas vai doer mais se arrepender de não ter tentado. 🧭",
    "Sua rotina de hoje escreve o seu resultado de amanhã. ✍️",
    "Mesmo o dia mais cansado pode terminar com um treino bom. 🌙",
    "Quem se cuida vive melhor. Ponto. 🌿",
    "Foque no progresso, não na perfeição. 📊",
    "Dê o primeiro passo. A trilha aparece enquanto você caminha. 👣",
    "A sua dedicação inspira quem está ao seu lado. 🌟",
    "Hoje a meta é simples: fazer melhor do que ontem, nem que seja um pouquinho. 🔝",
    "Disciplina é fazer o que precisa ser feito, mesmo sem vontade. 🧱",
    "Você é mais forte do que pensa. Prove para si mesmo hoje. 🦁",
    "Treinou, comeu bem, dormiu bem? Então o resultado vem. ✅",
    "A sua jornada é só sua. Respeite o seu ritmo. 🐢",
    "Confie na sua preparação. 🎽",
    "Todo esforço de hoje é investimento no seu bem-estar. 💰",
    "Fortaleça o corpo para a vida ficar mais leve. 🪶",
    "O progresso mora fora da zona de conforto, mas bem perto da porta. 🚪",
    "Não deixe o cansaço de hoje decidir o que você vai ser amanhã. 🌄",
    "Transforme a vontade de desistir em mais uma repetição. 🔥",
    "Persistência é o músculo que mais cresce quando você treina. 💎",
    "Hoje você treina por você. Amanhã você agradece. 🙏",
    "Ser constante é a forma mais bonita de se respeitar. 🌸",
    "Respeite os seus limites e vá um pouquinho além. 📐",
    "O espelho muda devagar, mas a disposição muda logo. ⚡",
    "Cada semana de treino é uma vitória acumulada. 🏁",
    "Resultado bom não tem pressa. Tem rotina. 🗓️",
    "Quando você treina, o dia inteiro fica melhor. ☀️",
    "Cuidar da saúde é a melhor forma de ganhar tempo no futuro. ⌛",
    "Se foi fácil, aumente a carga. Se foi difícil, parabéns, está funcionando. 🏋️",
    "Foi bom? Repita. Foi ruim? Aprenda. Sempre avance. 📚",
    "Seu esforço de hoje já é uma conquista. 🥇",
    "Faça o simples bem feito, todos os dias. 🔑",
    "O treino acaba, o orgulho fica. 😌",
    "Com calma, com foco e com constância, você chega lá. 🧭",
    "Quanto mais você se cuida, mais energia você tem. 🔋",
    "Hoje é um bom dia para ser a sua melhor versão. 🌟",
    "Não treine para ser perfeito. Treine para ser capaz. 🛠️",
    "Seja grato pelo corpo que você tem e cuide dele como merece. 🙌",
    "A vitória começa quando você calça o tênis. 👟",
    "Cada refeição é uma chance de nutrir o seu objetivo. 🥦",
    "Não precisa ser fácil. Precisa valer a pena. 💫",
    "Treino feito é treino conquistado. ✔️",
    "Acorde com o objetivo em mente e vá atrás dele. 🎯",
    "Pequenas vitórias diárias constroem grandes resultados. 🏆",
    "O seu melhor hoje pode ser diferente do de ontem, e tudo bem. 🤍",
    "Nada muda se nada muda. Mexa-se. 🚶",
    "Quem tem um porquê suporta qualquer como. 💡",
    "A cada dia, um pouco mais forte. 🦾",
    "Gratidão no treino, disciplina na rotina. 🧘",
    "O hábito de hoje é a conquista de amanhã. 🌅",
    "Falta pouco para o próximo objetivo. Continue. 🏔️",
  ],
  en: [
    "Today's pain is tomorrow's strength. 💪",
    "Discipline is the bridge between goals and achievement. 🏆",
    "Your body can handle almost anything. It's your mind you need to convince. 🧠",
    "Don't stop when you're tired. Stop when you're done. 🔥",
    "Every workout is one step closer to your goal. 👣",
    "Success is the sum of small efforts repeated day after day. ⚡",
    "Be stronger than your excuses. 💥",
    "Transformation doesn't happen in the comfort zone. 🚀",
    "You don't need to be perfect, you need to be consistent. 🎯",
    "The only bad workout is the one that didn't happen. 💪",
    "Your biggest competition is who you were yesterday. 🏅",
    "Results don't lie. Keep going. 📈",
    "Focus, strength and faith. Every day. 🙏",
    "One day at a time. One workout at a time. ✅",
    "Change begins when discomfort overcomes fear. 🔑",
    "Invest in yourself. It's the best investment there is. 💎",
    "Bodies are built in the gym, but sculpted in the kitchen. 🥗",
    "Don't wait for motivation. Build discipline. ⚙️",
    "Every right choice brings you closer to your goal. 🎯",
    "The secret is to start. The rest comes with time. ⏳",
    "Consistency beats intensity. Every day. 🔄",
    "Your future self is thanking you for every workout today. 🙌",
    "LET'S GO! Today is the day to evolve. 🏆",
    "L Body. Together we are stronger. ❤️",
    "Trust the process. Results will come. 🌱",
    "One more day, one more chance to be better. ☀️",
    "Today's diet is tomorrow's body. 🥩",
    "There are no shortcuts. Only dedication. 💪",
    "You've made it this far. Don't stop now. 🔥",
    "Every champion was once a beginner. 🌟",
    "Whoever trains today won't regret it tomorrow. 💪",
    "Small habits, big transformations. 🌱",
    "The workout you do without motivation is the one that counts most. 🔥",
    "Don't compare your beginning to someone else's middle. 🛤️",
    "Consistency beats talent when talent doesn't show up. 🎯",
    "Your body hears everything your mind says. Speak kindly to it. 🧠",
    "Rest is part of training too. Recovering is evolving. 😴",
    "Water, sleep and real food: the base of everything. 💧",
    "Today you only need to start. The rest goes away with the first exercise. ▶️",
    "Training is a gift you give to your future. 🎁",
    "Every rep is a vote for the person you want to be. 🗳️",
    "Progress has no rush, but it has no days off. ⏱️",
    "The weight goes up when your confidence goes up. 📈",
    "Focus on what you can control: the next workout. 🎯",
    "It's not about being the best. It's about being better than yesterday. 🏅",
    "The scale is just a number. Your effort is what matters. ⚖️",
    "Take care of your body. It's the only place you'll live in forever. 🏠",
    "When training feels heavy, it's because you're growing. 🌳",
    "Respect the process. It will respect you back. 🤝",
    "Nobody ever regrets having trained. 💯",
    "Today is a great day to surprise yesterday's you. ✨",
    "An organized diet is half the way there. 🍽️",
    "Motivation makes you start. Habit makes you continue. 🔁",
    "That last exercise is what separates good from great. 🏆",
    "Train with your head, not just your muscles. 🧩",
    "What you do every day weighs more than what you do once in a while. 📅",
    "Hard days build strong people. 🛡️",
    "Be patient with your body and demanding of your routine. ⚙️",
    "Your only obligation today is to do your best. 🙌",
    "The body changes slowly. Self-esteem changes first. 😊",
    "A short workout beats a perfect one that never happens. ⏳",
    "Start as you are. Evolve as you want. 🚀",
    "Health is the investment that pays off every day. 💎",
    "Every drop of sweat is a brick of your best version. 🧱",
    "Smile, you chose to take care of yourself. 😁",
    "A big goal is built with a small task every day. 🏗️",
    "Whoever plans the week beats Monday laziness. 📝",
    "Good technique today, heavier load tomorrow. 🔧",
    "Breathe, focus and execute. 🌬️",
    "The best time to train was yesterday. The second best is now. ⏰",
    "Be proud of every day you showed up. 👏",
    "It's not punishment, it's care. Train out of love for your body. ❤️",
    "The strength you're looking for is in the next set. 💪",
    "Fewer excuses, more reps. 🔄",
    "Stopping will hurt, but regretting not trying will hurt more. 🧭",
    "Today's routine writes tomorrow's result. ✍️",
    "Even the most tiring day can end with a good workout. 🌙",
    "Those who take care of themselves live better. Period. 🌿",
    "Focus on progress, not perfection. 📊",
    "Take the first step. The path appears as you walk. 👣",
    "Your dedication inspires those around you. 🌟",
    "Today's goal is simple: do better than yesterday, even if just a little. 🔝",
    "Discipline is doing what needs to be done, even when you don't feel like it. 🧱",
    "You are stronger than you think. Prove it to yourself today. 🦁",
    "Trained, ate well, slept well? Then results will come. ✅",
    "Your journey is yours alone. Respect your pace. 🐢",
    "Trust your preparation. 🎽",
    "Every effort today is an investment in your well-being. 💰",
    "Strengthen your body so life feels lighter. 🪶",
    "Progress lives outside the comfort zone, but very close to the door. 🚪",
    "Don't let today's tiredness decide who you'll be tomorrow. 🌄",
    "Turn the urge to quit into one more rep. 🔥",
    "Persistence is the muscle that grows most when you train. 💎",
    "Today you train for yourself. Tomorrow you'll say thanks. 🙏",
    "Being consistent is the most beautiful way of respecting yourself. 🌸",
    "Respect your limits and go a little beyond. 📐",
    "The mirror changes slowly, but your energy changes soon. ⚡",
    "Every week of training is an accumulated victory. 🏁",
    "Good results aren't rushed. They're routine. 🗓️",
    "When you train, the whole day gets better. ☀️",
    "Taking care of your health is the best way to gain time in the future. ⌛",
    "Was it easy? Add weight. Was it hard? Congratulations, it's working. 🏋️",
    "Was it good? Repeat. Was it bad? Learn. Always move forward. 📚",
    "Your effort today is already an achievement. 🥇",
    "Do the simple things well, every day. 🔑",
    "The workout ends, the pride stays. 😌",
    "Calmly, focused and consistent, you'll get there. 🧭",
    "The more you take care of yourself, the more energy you have. 🔋",
    "Today is a good day to be your best version. 🌟",
    "Don't train to be perfect. Train to be capable. 🛠️",
    "Be grateful for the body you have and take care of it as it deserves. 🙌",
    "Victory begins when you lace up your shoes. 👟",
    "Every meal is a chance to feed your goal. 🥦",
    "It doesn't have to be easy. It has to be worth it. 💫",
    "Workout done is workout won. ✔️",
    "Wake up with your goal in mind and go after it. 🎯",
    "Small daily wins build big results. 🏆",
    "Your best today may differ from yesterday's, and that's fine. 🤍",
    "Nothing changes if nothing changes. Move. 🚶",
    "Whoever has a why can bear almost any how. 💡",
    "Every day, a little stronger. 🦾",
    "Gratitude in training, discipline in routine. 🧘",
    "Today's habit is tomorrow's achievement. 🌅",
    "You're close to your next goal. Keep going. 🏔️",
  ],
  es: [
    "El dolor de hoy es la fuerza de mañana. 💪",
    "La disciplina es el puente entre metas y logros. 🏆",
    "Tu cuerpo puede soportar casi todo. Es tu mente la que necesitas convencer. 🧠",
    "No pares cuando estés cansado. Para cuando hayas terminado. 🔥",
    "Cada entrenamiento es un paso más cerca de tu objetivo. 👣",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. ⚡",
    "Sé más fuerte que tus excusas. 💥",
    "La transformación no ocurre en la zona de confort. 🚀",
    "No necesitas ser perfecto, necesitas ser consistente. 🎯",
    "El único entrenamiento malo es el que no se hizo. 💪",
    "Tu mayor competencia es quien eras ayer. 🏅",
    "Los resultados no mienten. Continúa. 📈",
    "Foco, fuerza y fe. Todos los días. 🙏",
    "Un día a la vez. Un entrenamiento a la vez. ✅",
    "El cambio comienza cuando el malestar supera el miedo. 🔑",
    "Invierte en ti. Es la mejor inversión que existe. 💎",
    "Los cuerpos se construyen en el gym, pero se esculpen en la cocina. 🥗",
    "No esperes motivación. Crea disciplina. ⚙️",
    "Cada elección correcta te acerca a tu objetivo. 🎯",
    "El secreto es comenzar. El resto viene con el tiempo. ⏳",
    "La consistencia supera a la intensidad. Todos los días. 🔄",
    "Tu yo futuro te agradece por cada entrenamiento de hoy. 🙌",
    "¡VAMOS! Hoy es día de evolucionar. 🏆",
    "L Body. Juntos somos más fuertes. ❤️",
    "Confía en el proceso. Los resultados llegan. 🌱",
    "Un día más, una oportunidad más de ser mejor. ☀️",
    "La dieta de hoy es el cuerpo de mañana. 🥩",
    "No hay atajos. Solo dedicación. 💪",
    "Has llegado hasta aquí. No pares ahora. 🔥",
    "Todo campeón fue alguna vez un principiante. 🌟",
    "Quien entrena hoy no se arrepiente mañana. 💪",
    "Pequeños hábitos, grandes transformaciones. 🌱",
    "El entrenamiento que haces sin ganas es el que más cuenta. 🔥",
    "No compares tu comienzo con la mitad de nadie. 🛤️",
    "La constancia vence al talento cuando el talento no aparece. 🎯",
    "Tu cuerpo escucha todo lo que dice tu mente. Háblale bien. 🧠",
    "Descansar también es parte del entrenamiento. Recuperarse es evolucionar. 😴",
    "Agua, sueño y comida de verdad: la base de todo. 💧",
    "Hoy solo necesitas empezar. El resto se va con el primer ejercicio. ▶️",
    "Entrenar es un regalo que le das a tu futuro. 🎁",
    "Cada repetición es un voto por la persona que quieres ser. 🗳️",
    "La evolución no tiene prisa, pero no tiene descanso. ⏱️",
    "La carga sube cuando sube tu confianza. 📈",
    "Enfócate en lo que puedes controlar: el próximo entrenamiento. 🎯",
    "No se trata de ser el mejor. Se trata de ser mejor que ayer. 🏅",
    "La balanza es solo un número. Tu esfuerzo es lo que importa. ⚖️",
    "Cuida tu cuerpo. Es el único lugar donde vivirás para siempre. 🏠",
    "Cuando el entrenamiento pesa, es porque estás creciendo. 🌳",
    "Respeta el proceso. Él te respetará de vuelta. 🤝",
    "Nadie se arrepiente de haber entrenado. 💯",
    "Hoy es un gran día para sorprender a tu yo de ayer. ✨",
    "Una alimentación organizada es medio camino andado. 🍽️",
    "La motivación te hace empezar. El hábito te hace continuar. 🔁",
    "Ese último ejercicio es lo que separa lo bueno de lo excelente. 🏆",
    "Entrena con la cabeza, no solo con los músculos. 🧩",
    "Lo que haces todos los días pesa más que lo que haces de vez en cuando. 📅",
    "Los días difíciles construyen personas fuertes. 🛡️",
    "Sé paciente con tu cuerpo y exigente con tu rutina. ⚙️",
    "Tu única obligación hoy es dar lo mejor de ti. 🙌",
    "El cuerpo cambia poco a poco. La autoestima cambia primero. 😊",
    "Un entrenamiento corto vale más que uno perfecto que no ocurre. ⏳",
    "Empieza como estás. Evoluciona como quieres. 🚀",
    "La salud es la inversión que rinde todos los días. 💎",
    "Cada gota de sudor es un ladrillo de tu mejor versión. 🧱",
    "Sonríe, elegiste cuidarte. 😁",
    "Una meta grande se construye con una tarea pequeña cada día. 🏗️",
    "Quien planea la semana vence la pereza del lunes. 📝",
    "Buena técnica hoy, más carga mañana. 🔧",
    "Respira, enfócate y ejecuta. 🌬️",
    "El mejor momento para entrenar fue ayer. El segundo mejor es ahora. ⏰",
    "Siéntete orgulloso de cada día en que apareciste. 👏",
    "No es un castigo, es cuidado. Entrena por amor a tu cuerpo. ❤️",
    "La fuerza que buscas está en la próxima serie. 💪",
    "Menos excusas, más repeticiones. 🔄",
    "Parar dolerá, pero dolerá más arrepentirte de no haberlo intentado. 🧭",
    "Tu rutina de hoy escribe tu resultado de mañana. ✍️",
    "Incluso el día más cansado puede terminar con un buen entrenamiento. 🌙",
    "Quien se cuida vive mejor. Punto. 🌿",
    "Enfócate en el progreso, no en la perfección. 📊",
    "Da el primer paso. El camino aparece mientras caminas. 👣",
    "Tu dedicación inspira a quienes están a tu lado. 🌟",
    "La meta de hoy es simple: hacerlo mejor que ayer, aunque sea un poquito. 🔝",
    "Disciplina es hacer lo que hay que hacer, incluso sin ganas. 🧱",
    "Eres más fuerte de lo que piensas. Demuéstralo hoy. 🦁",
    "¿Entrenaste, comiste bien, dormiste bien? Entonces el resultado llega. ✅",
    "Tu camino es solo tuyo. Respeta tu ritmo. 🐢",
    "Confía en tu preparación. 🎽",
    "Todo esfuerzo de hoy es inversión en tu bienestar. 💰",
    "Fortalece el cuerpo para que la vida sea más ligera. 🪶",
    "El progreso vive fuera de la zona de confort, pero muy cerca de la puerta. 🚪",
    "No dejes que el cansancio de hoy decida quién serás mañana. 🌄",
    "Convierte las ganas de rendirte en una repetición más. 🔥",
    "La persistencia es el músculo que más crece cuando entrenas. 💎",
    "Hoy entrenas por ti. Mañana lo agradeces. 🙏",
    "Ser constante es la forma más bonita de respetarte. 🌸",
    "Respeta tus límites y ve un poquito más allá. 📐",
    "El espejo cambia despacio, pero la energía cambia pronto. ⚡",
    "Cada semana de entrenamiento es una victoria acumulada. 🏁",
    "Los buenos resultados no tienen prisa. Tienen rutina. 🗓️",
    "Cuando entrenas, todo el día mejora. ☀️",
    "Cuidar la salud es la mejor forma de ganar tiempo en el futuro. ⌛",
    "¿Fue fácil? Sube la carga. ¿Fue difícil? Felicidades, está funcionando. 🏋️",
    "¿Fue bueno? Repite. ¿Fue malo? Aprende. Siempre avanza. 📚",
    "Tu esfuerzo de hoy ya es un logro. 🥇",
    "Haz lo simple bien hecho, todos los días. 🔑",
    "El entrenamiento termina, el orgullo se queda. 😌",
    "Con calma, enfoque y constancia, llegarás. 🧭",
    "Cuanto más te cuidas, más energía tienes. 🔋",
    "Hoy es un buen día para ser tu mejor versión. 🌟",
    "No entrenes para ser perfecto. Entrena para ser capaz. 🛠️",
    "Agradece el cuerpo que tienes y cuídalo como merece. 🙌",
    "La victoria empieza cuando te pones las zapatillas. 👟",
    "Cada comida es una oportunidad de nutrir tu objetivo. 🥦",
    "No tiene que ser fácil. Tiene que valer la pena. 💫",
    "Entrenamiento hecho es entrenamiento conquistado. ✔️",
    "Despierta con tu objetivo en mente y ve tras él. 🎯",
    "Pequeñas victorias diarias construyen grandes resultados. 🏆",
    "Tu mejor de hoy puede ser distinto al de ayer, y está bien. 🤍",
    "Nada cambia si nada cambia. Muévete. 🚶",
    "Quien tiene un porqué soporta cualquier cómo. 💡",
    "Cada día, un poco más fuerte. 🦾",
    "Gratitud en el entrenamiento, disciplina en la rutina. 🧘",
    "El hábito de hoy es el logro de mañana. 🌅",
    "Falta poco para el próximo objetivo. Sigue. 🏔️",
  ]
};

function getPhrases() { return PHRASES_DATA[currentLang] || PHRASES_DATA['pt']; }

// ===== ENGINE i18n =====
let currentLang = localStorage.getItem('tl_lang') || 'pt';

function t(key, vars) {
  const tr = TRANSLATIONS[currentLang] || TRANSLATIONS['pt'];
  let val = tr[key] !== undefined ? tr[key] : (TRANSLATIONS['pt'][key] !== undefined ? TRANSLATIONS['pt'][key] : key);
  if (vars && typeof val === 'string') {
    Object.keys(vars).forEach(k => { val = val.replace('{' + k + '}', vars[k]); });
  }
  return val;
}

function getLevels() {
  return LEVELS_DATA[currentLang] || LEVELS_DATA['pt'];
}

function getBadges() {
  return BADGES_DATA[currentLang] || BADGES_DATA['pt'];
}

function getBadgeById(id) {
  const list = getBadges();
  return list.find(b => b.id === id) || (BADGES_DATA['pt'].find(b => b.id === id));
}

function getLevelForPts(pts) {
  const levels = getLevels();
  let current = levels[0];
  for (const l of levels) { if (pts >= l.min) current = l; else break; }
  return current;
}

function getNextLevel(pts) {
  const levels = getLevels();
  return levels.find(l => l.min > pts) || levels[levels.length - 1];
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('tl_lang', lang);
  // Atualiza botões do seletor
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const l = btn.getAttribute('data-lang-btn');
    btn.style.background = l === currentLang ? 'var(--gold)' : 'rgba(255,255,255,0.1)';
    btn.style.color      = l === currentLang ? 'var(--black)' : '#ccc';
  });
  applyTranslations();
  if (typeof window.lbRerender === 'function') window.lbRerender();
  // Re-renderiza app se já logado
  if (typeof currentUserData !== 'undefined' && currentUserData) {
    if (typeof renderDashboard === 'function') renderDashboard();
    if (typeof renderMission === 'function') renderMission();
    // Atualizar frase do welcome screen
    const wQuote = document.getElementById('w-quote');
    if (wQuote) wQuote.textContent = typeof getDailyPhrase === 'function' ? getDailyPhrase() : '';
    if (typeof renderBadges === 'function') {
      const page = document.querySelector('.nav-item.active');
      if (page && page.getAttribute('data-page') === 'badges') renderBadges();
    }
    if (typeof renderProfile === 'function') {
      const page = document.querySelector('.nav-item.active');
      if (page && page.getAttribute('data-page') === 'profile') renderProfile();
    }
    if (typeof renderRanking === 'function') {
      const page = document.querySelector('.nav-item.active');
      if (page && page.getAttribute('data-page') === 'ranking') renderRanking();
    }
  }
  if (typeof isAdmin !== 'undefined' && isAdmin) {
    if (typeof loadAdminData === 'function') loadAdminData();
  }
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const html = el.hasAttribute('data-i18n-html');
    const val  = t(key);
    if (attr)       el.setAttribute(attr, val);
    else if (html)  el.innerHTML = val;
    else            el.textContent = val;
  });
}

// Inicializa seletor e traduções quando DOM pronto
document.addEventListener('DOMContentLoaded', () => {
  // Atualizar estilo dos botões já existentes no HTML
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const l = btn.getAttribute('data-lang-btn');
    btn.style.background = l === currentLang ? 'var(--gold)' : 'rgba(255,255,255,0.1)';
    btn.style.color      = l === currentLang ? 'var(--black)' : '#ccc';
  });
  applyTranslations();
});
