// =====================================================================
// L BODY — tradução complementar (inglês e espanhol) das telas do aluno.
// Funciona por dicionário: troca o texto em português na tela quando o idioma não é PT.
// Não mexe no painel do professor.
// =====================================================================
(function () {
  const D = Object.create(null);           // pt -> [en, es]
  const add = (pt, en, es) => { D[pt] = [en, es]; };
  const L = () => (typeof currentLang !== 'undefined' ? currentLang : (localStorage.getItem('tl_lang') || 'pt'));
  const idx = () => (L() === 'en' ? 0 : 1);

  // ---------------- navegação, início, geral ----------------
  [
    ['Sair', 'Log out', 'Salir'], ['Comunidade', 'Community', 'Comunidad'], ['Treinos', 'Workouts', 'Entrenos'], ['Treino', 'Workout', 'Entreno'],
    ['Início', 'Home', 'Inicio'], ['Perfil', 'Profile', 'Perfil'], ['Ranking', 'Ranking', 'Ranking'], ['Feed', 'Feed', 'Feed'], ['Chat', 'Chat', 'Chat'],
    ['Agenda', 'Schedule', 'Agenda'], ['Nutrição', 'Nutrition', 'Nutrición'], ['Feedback', 'Feedback', 'Feedback'], ['Evolução', 'Progress', 'Evolución'],
    ['Anamnese', 'Health form', 'Anamnesis'], ['Seus compromissos', 'Your appointments', 'Tus compromisos'], ['Protocolo em PDF', 'PDF protocol', 'Protocolo en PDF'],
    ['Da sua semana', 'About your week', 'De tu semana'], ['Medidas e fotos', 'Measurements and photos', 'Medidas y fotos'], ['Seu cadastro', 'Your profile form', 'Tu registro'],
    ['Voltar', 'Back', 'Volver'], ['Carregando...', 'Loading...', 'Cargando...'], ['Carregando mensagens...', 'Loading messages...', 'Cargando mensajes...'],
    ['Instale o L Body no seu celular', 'Install L Body on your phone', 'Instala L Body en tu celular'],
    ['Abra com 1 toque, direto da tela inicial, sem digitar link.', 'Open it with one tap, straight from your home screen.', 'Ábrela con un toque, directo desde la pantalla de inicio.'],
    ['Instalar agora', 'Install now', 'Instalar ahora'], ['Agora não', 'Not now', 'Ahora no'], ['Instalar o app no celular', 'Install the app on your phone', 'Instalar la app en el celular'],
    ['Ativar avisos no celular', 'Turn on phone alerts', 'Activar avisos en el celular'],
    ['Suas', 'Your', 'Tus'], ['conquistas', 'achievements', 'logros'], ['Desbloqueie todas as medalhas', 'Unlock all the badges', 'Desbloquea todas las medallas'],
    ['Notificações', 'Notifications', 'Notificaciones'],
    ['Não foi possível carregar seus treinos agora. Tente de novo em instantes.', 'We could not load your workouts right now. Please try again in a moment.', 'No pudimos cargar tus entrenamientos ahora. Inténtalo de nuevo en unos instantes.'],
    ['Os campeões dos meses anteriores', 'The champions of previous months', 'Los campeones de los meses anteriores'],
    ['aparecerão aqui a partir do', 'will appear here starting on', 'aparecerán aquí a partir del'],
    ['dia 1° do próximo mês!', 'the 1st of next month!', 'día 1° del próximo mes!'],
    ['Nenhuma atividade ainda.', 'No activity yet.', 'Aún no hay actividad.'], ['Seja o primeiro.', 'Be the first.', 'Sé el primero.'],
    ['Não foi possível salvar. Tente novamente.', 'Could not save. Please try again.', 'No se pudo guardar. Inténtalo de nuevo.'],
    ['Não foi possível enviar agora', 'Could not send right now', 'No se pudo enviar ahora'],
    ['Preparando o arquivo...', 'Preparing the file...', 'Preparando el archivo...'],
    ['Não foi possível abrir o arquivo', 'Could not open the file', 'No se pudo abrir el archivo'], ['Não foi possível abrir', 'Could not open', 'No se pudo abrir'],
    ['Dados salvos', 'Data saved', 'Datos guardados'], ['Mensagem enviada ao grupo', 'Message sent to the group', 'Mensaje enviado al grupo'], ['Apagar esta mensagem?', 'Delete this message?', '¿Borrar este mensaje?'],
    ['No iPhone (Safari): toque em Compartilhar (quadrado com seta) e depois em "Adicionar à Tela de Início".', 'On iPhone (Safari): tap Share (square with an arrow) and then "Add to Home Screen".', 'En iPhone (Safari): toca Compartir (cuadrado con flecha) y luego "Añadir a pantalla de inicio".'],
    ['No Android (Chrome): toque nos 3 pontinhos do navegador e depois em "Instalar app" ou "Adicionar à tela inicial".', 'On Android (Chrome): tap the 3 dots in the browser and then "Install app" or "Add to Home screen".', 'En Android (Chrome): toca los 3 puntos del navegador y luego "Instalar app" o "Añadir a la pantalla de inicio".'],
    ['concluiu mais um treino! O time não para 💪', 'completed another workout! The team never stops 💪', '¡completó otro entrenamiento! El equipo no para 💪'],
    ['começou o dia com disciplina! Foco total ☀️', 'started the day with discipline! Full focus ☀️', '¡empezó el día con disciplina! Foco total ☀️'],
    ['não deixou passar o lanche! Consistência em ação 🥗', 'didn\'t skip the snack! Consistency in action 🥗', '¡no se saltó la merienda! Consistencia en acción 🥗'],
    ['seguiu firme no almoço! Alimentação é treino também 🍽️', 'stayed on track at lunch! Nutrition is training too 🍽️', '¡siguió firme en el almuerzo! La nutrición también es entrenamiento 🍽️'],
    ['fechou o dia com chave de ouro! Missão cumprida 🌙', 'closed the day perfectly! Mission accomplished 🌙', '¡cerró el día perfectamente! Misión cumplida 🌙'],
    ['concluiu mais um cardio! Resistência elevada 🏃', 'completed another cardio session! Endurance rising 🏃', '¡completó otro cardio! Resistencia elevada 🏃'],
    ['garantiu a hidratação do dia! Corpo em alta performance 💧', 'nailed hydration today! Body at peak performance 💧', '¡garantizó la hidratación del día! Cuerpo en alto rendimiento 💧'],
    ['caprichou na alimentação saudável! 🍎', 'ate healthy today! 🍎', '¡se cuidó con la alimentación saludable! 🍎'],
    ['registrou o peso hoje ⚖️', 'logged weight today ⚖️', 'registró el peso hoy ⚖️'],
    ['postou o treino no feed 📸', 'posted a workout on the feed 📸', 'publicó el entrenamiento en el feed 📸'],
    ['compartilhou o treino de hoje 💪📸', 'shared today\'s workout 💪📸', 'compartió el entrenamiento de hoy 💪📸'],
    ['fez algo incrível!', 'did something amazing!', '¡hizo algo increíble!'],
    ['Ranking do', 'Team', 'Ranking del'], ['time', 'Ranking', 'equipo'],
    ['Abrir agenda', 'Open schedule', 'Abrir agenda'], ['Alterar', 'Change', 'Cambiar'],
    ['Avisos ativados', 'Alerts on', 'Avisos activados'], ['Avisos não ativados', 'Alerts not turned on', 'Avisos no activados'], ['Avisos não permitidos', 'Alerts not allowed', 'Avisos no permitidos'],
    ['Avisos ativados (neste aparelho só com o app aberto)', 'Alerts on (on this device only while the app is open)', 'Avisos activados (en este dispositivo solo con la app abierta)'],
    ['Seu aparelho não permite avisos', 'Your device does not allow alerts', 'Tu dispositivo no permite avisos'],
    ['Treinei hoje (+50 pts)', 'I trained today (+50 pts)', 'Entrené hoy (+50 pts)'],
    ['Basta 1 toque: marque seu treino. Ou registre 2 refeições.', 'Just one tap: mark your workout. Or log 2 meals.', 'Solo un toque: marca tu entreno. O registra 2 comidas.'],
    ['Sua meta de hoje', "Today's goal", 'Tu meta de hoy'],
    ['Como funcionam os pontos', 'How points work', 'Cómo funcionan los puntos'], ['Sons: ligados', 'Sounds: on', 'Sonidos: activados'], ['Sons: desligados', 'Sounds: off', 'Sonidos: desactivados'],
    ['Complete sua anamnese', 'Complete your health form', 'Completa tu anamnesis'],
    ['Seu cadastro completo ajuda o professor a montar o plano certo para você. Toque para preencher.', 'Your full profile helps your coach build the right plan for you. Tap to fill it in.', 'Tu registro completo ayuda al profesor a armar el plan correcto para ti. Toca para completarlo.'],
    ['Preencha o seu cadastro completo para o professor montar o seu plano.', 'Fill in your full profile so your coach can build your plan.', 'Completa tu registro para que el profesor arme tu plan.'],
    ['Próximo compromisso', 'Next appointment', 'Próximo compromiso'],
    ['Plano vencido', 'Plan expired', 'Plan vencido'], ['Treino vencido', 'Workout expired', 'Entreno vencido'],
    ['Plano vence hoje', 'Plan expires today', 'El plan vence hoy'], ['Treino vence hoje', 'Workout expires today', 'El entreno vence hoy'],
    ['(você)', '(you)', '(tú)'], ['Entendi', 'Got it', 'Entendido'], ['Cadastrar', 'Sign up', 'Registrarse'], ['Entrar', 'Log in', 'Entrar'], ['Senha', 'Password', 'Contraseña'],
    ['Prof.', 'Coach', 'Prof.'], ['Medalhas', 'Badges', 'Medallas'], ['Conquistas', 'Achievements', 'Logros'], ['Suas medalhas e marcos', 'Your badges and milestones', 'Tus medallas y logros'],
    ['Mês atual', 'This month', 'Mes actual'], ['Pontuação Geral', 'Overall score', 'Puntuación general'], ['Meses anteriores', 'Previous months', 'Meses anteriores'],
    ['Classificação', 'Standings', 'Clasificación'], ['Top alunos do L Body', 'Top L Body students', 'Mejores alumnos de L Body'],
    ['Seus treinos', 'Your workouts', 'Tus entrenos'], ['Minha', 'My', 'Mi'], ['Minhas', 'My', 'Mis'], ['rotina', 'routine', 'rutina'], ['agenda', 'schedule', 'agenda'],
    ['notificações', 'notifications', 'notificaciones'], ['evolução', 'progress', 'evolución'], ['anamnese', 'health form', 'anamnesis'], ['semana', 'week', 'semana'],
    ['nutricional', 'nutrition', 'nutricional'], ['Protocolo', 'Nutrition', 'Protocolo'], ['Feedback da', 'Weekly', 'Feedback de la'],
    ['Montada pelo seu professor, com a demonstração de cada exercício.', 'Built by your coach, with a demo of every exercise.', 'Armada por tu profesor, con la demostración de cada ejercicio.'],
    ['Você ainda não tem uma rotina ativa.', "You don't have an active routine yet.", 'Aún no tienes una rutina activa.'],
    ['Quando o seu professor atribuir um treino, ele aparece aqui.', 'When your coach assigns a workout, it shows up here.', 'Cuando tu profesor asigne un entreno, aparecerá aquí.'],
    ['Central', 'Notification center', 'Central'], ['Acompanhamento', 'Follow-up', 'Seguimiento'], ['Alimentação', 'Nutrition', 'Alimentación'],
    ['Cadastro completo', 'Full profile', 'Registro completo'],
    ['Tudo em dia.', 'All caught up.', 'Todo al día.'], ['Quando houver um aviso, ele aparece aqui.', 'When there is an alert, it shows up here.', 'Cuando haya un aviso, aparecerá aquí.'],
    ['Mensagem do professor', 'Message from your coach', 'Mensaje del profesor'], ['Resposta ao seu treino', 'Reply to your workout', 'Respuesta a tu entreno'],
    ['Resposta ao seu feedback semanal', 'Reply to your weekly feedback', 'Respuesta a tu feedback semanal'],
    ['Protocolo nutricional', 'Nutrition protocol', 'Protocolo nutricional'], ['Seu protocolo nutricional foi atualizado.', 'Your nutrition protocol was updated.', 'Tu protocolo nutricional fue actualizado.'],
    ['Feedback da semana', 'Weekly feedback', 'Feedback de la semana'], ['Conte ao professor como foi a sua semana. Leva 1 minuto.', 'Tell your coach how your week went. It takes 1 minute.', 'Cuéntale al profesor cómo fue tu semana. Toma 1 minuto.'],
    ['Compromisso hoje', 'Appointment today', 'Compromiso hoy'], ['Compromisso amanhã', 'Appointment tomorrow', 'Compromiso mañana'], ['Treino presencial', 'In-person workout', 'Entreno presencial'],
    ['Meta com prazo vencido', 'Goal past its deadline', 'Meta con plazo vencido'], ['Meta perto do prazo', 'Goal close to its deadline', 'Meta cerca del plazo'],
    // ---------------- agenda ----------------
    ['Minha agenda', 'My schedule', 'Mi agenda'], ['Horário fixo', 'Fixed time', 'Horario fijo'], ['Anteriores', 'Previous', 'Anteriores'],
    ['Nenhum compromisso marcado.', 'No appointments scheduled.', 'Ningún compromiso agendado.'],
    ['Quando o seu professor marcar qualquer compromisso com você (treino presencial, avaliação física, troca de treino e outros), ele aparece aqui e você recebe o aviso.',
     'When your coach schedules any appointment with you (in-person workout, physical assessment, workout change and more), it shows up here and you get an alert.',
     'Cuando tu profesor agende cualquier compromiso contigo (entreno presencial, evaluación física, cambio de entreno y otros), aparecerá aquí y recibirás el aviso.'],
    ['Hoje', 'Today', 'Hoy'], ['Amanhã', 'Tomorrow', 'Mañana'], ['realizado', 'done', 'realizado'],
    // ---------------- feedback semanal ----------------
    ['Como foi a sua dedicação nos treinos?', 'How was your dedication to training?', '¿Cómo fue tu dedicación en los entrenos?'],
    ['Como foi a sua alimentação?', 'How was your nutrition?', '¿Cómo fue tu alimentación?'], ['Como foi o seu sono?', 'How was your sleep?', '¿Cómo fue tu sueño?'],
    ['Como esteve a sua energia?', 'How was your energy?', '¿Cómo estuvo tu energía?'],
    ['Peso de hoje (kg) — opcional', "Today's weight (kg) — optional", 'Peso de hoy (kg) — opcional'], ['Dores ou desconfortos', 'Pain or discomfort', 'Dolores o molestias'],
    ['Algo doeu ou incomodou?', 'Did anything hurt or bother you?', '¿Algo dolió o molestó?'], ['Comentário para o professor', 'Comment for your coach', 'Comentario para el profesor'],
    ['O que mais quer contar?', 'Anything else to share?', '¿Qué más quieres contar?'], ['Enviar feedback', 'Send feedback', 'Enviar feedback'], ['Atualizar feedback', 'Update feedback', 'Actualizar feedback'],
    ['Resposta do professor', 'Coach reply', 'Respuesta del profesor'], ['Sem resposta ainda', 'No reply yet', 'Sin respuesta aún'],
    ['Avalie os quatro itens de 1 a 5', 'Rate all four items from 1 to 5', 'Evalúa los cuatro puntos de 1 a 5'],
    ['Feedback enviado. Obrigado!', 'Feedback sent. Thank you!', '¡Feedback enviado. Gracias!'], ['Enviando...', 'Sending...', 'Enviando...'],
    ['Treinos', 'Workouts', 'Entrenos'], ['Sono', 'Sleep', 'Sueño'], ['Energia', 'Energy', 'Energía'],
    // ---------------- nutrição ----------------
    ['Seu protocolo nutricional ainda não foi enviado.', 'Your nutrition protocol has not been sent yet.', 'Tu protocolo nutricional aún no fue enviado.'],
    ['Quando o professor anexar o PDF, ele aparece aqui.', 'When your coach attaches the PDF, it shows up here.', 'Cuando el profesor adjunte el PDF, aparecerá aquí.'],
    ['Abrir PDF', 'Open PDF', 'Abrir PDF'], ['Baixar', 'Download', 'Descargar'],
    // ---------------- treinos (aluno) ----------------
    ['Rotinas', 'Routines', 'Rutinas'], ['Rotina', 'Routine', 'Rutina'], ['Orientações gerais', 'General guidance', 'Orientaciones generales'], ['Evolução', 'Progress', 'Evolución'],
    ['Feedbacks', 'Feedback', 'Feedbacks'], ['Ver treino', 'View workout', 'Ver entreno'], ['Iniciar', 'Start', 'Iniciar'],
    ['Você ainda não realizou esse treino', "You haven't done this workout yet", 'Aún no realizaste este entreno'],
    ['Você está no modo visualização.', 'You are in view mode.', 'Estás en modo vista.'], ['Toque em INICIAR para começar seu treino.', 'Tap START to begin your workout.', 'Toca INICIAR para empezar tu entreno.'],
    ['Finalizar treino', 'Finish workout', 'Finalizar entreno'], ['Cancelar treino', 'Cancel workout', 'Cancelar entreno'], ['Editar', 'Edit', 'Editar'],
    ['Concluir treino', 'Complete workout', 'Completar entreno'], ['Tempo de treino', 'Workout time', 'Tiempo de entreno'],
    ['O que você achou dessa atividade?', 'How was this workout?', '¿Qué te pareció esta actividad?'], ['Selecione', 'Select', 'Selecciona'],
    ['Deixe seu comentário aqui', 'Leave your comment here', 'Deja tu comentario aquí'], ['Seu comentário aqui', 'Your comment here', 'Tu comentario aquí'],
    ['Concluir', 'Done', 'Completar'], ['Salvando...', 'Saving...', 'Guardando...'], ['Parabéns!', 'Congratulations!', '¡Felicidades!'],
    ['Você concluiu o seu treino.', 'You finished your workout.', 'Completaste tu entreno.'], ['Fechar', 'Close', 'Cerrar'],
    ['Intervalo', 'Rest', 'Descanso'], ['Zerar', 'Reset', 'Reiniciar'], ['Continuar', 'Continue', 'Continuar'], ['Descanso finalizado', 'Rest finished', 'Descanso terminado'],
    ['Muito leve', 'Very light', 'Muy ligero'], ['Leve', 'Light', 'Ligero'], ['Moderada', 'Moderate', 'Moderada'], ['Pouco intensa', 'Slightly intense', 'Poco intensa'],
    ['Intensa', 'Intense', 'Intensa'], ['Muito intensa', 'Very intense', 'Muy intensa'], ['Muito, muito intensa', 'Extremely intense', 'Extremadamente intensa'], ['Exaustão máxima', 'Maximum exhaustion', 'Agotamiento máximo'],
    ['Bi-set', 'Superset', 'Biserie'], ['Série combinada', 'Combined set', 'Serie combinada'], ['Tri-set', 'Tri-set', 'Triserie'], ['Pirâmide crescente', 'Ascending pyramid', 'Pirámide creciente'], ['Pirâmide decrescente', 'Descending pyramid', 'Pirámide decreciente'],
    ['Drop-set', 'Drop set', 'Drop set'], ['Rest-pause', 'Rest-pause', 'Rest-pause'], ['Isometria', 'Isometric hold', 'Isometría'], ['Unilateral', 'Unilateral', 'Unilateral'], ['Falha', 'To failure', 'Al fallo'],
    ['Salvando sua evolução...', 'Saving your progress...', 'Guardando tu evolución...'],
    ['Isometria: mantenha a posição, sem se mover', 'Isometric: hold the position, do not move', 'Isometría: mantén la posición, sin moverte'],
    // ---------------- anamnese ----------------
    ['Voltar', 'Back', 'Volver'], ['Concluir', 'Finish', 'Terminar'],
    ['Dados pessoais', 'Personal details', 'Datos personales'], ['Objetivo e saúde', 'Goal and health', 'Objetivo y salud'], ['Treinamento', 'Training', 'Entrenamiento'],
    ['Hábitos de vida', 'Lifestyle', 'Hábitos de vida'], ['Rotina', 'Routine', 'Rutina'], ['Hábitos alimentares', 'Eating habits', 'Hábitos alimentarios'], ['Regras da consultoria', 'Coaching rules', 'Reglas de la asesoría'],
    ['Usamos apenas para o seu cadastro e contrato. Se for menor de idade, preencha com os dados do responsável.', 'We only use this for your registration and contract. If you are a minor, fill in your guardian’s details.', 'Solo lo usamos para tu registro y contrato. Si eres menor de edad, completa con los datos del responsable.'],
    ['Quanto mais detalhes, melhor o seu plano.', 'The more detail, the better your plan.', 'Cuantos más detalles, mejor tu plan.'],
    ['Uma das partes mais importantes. Da hora que acorda ao horário que vai dormir, com horários. Se for igual a outro dia, escreva "igual ao dia x".', 'One of the most important parts. From the time you wake up until you go to bed, with times. If it is the same as another day, write "same as day x".', 'Una de las partes más importantes. Desde que te despiertas hasta que te duermes, con horarios. Si es igual a otro día, escribe "igual al día x".'],
    ['Seja o mais específico possível: horário, o que come e onde.', 'Be as specific as possible: time, what you eat and where.', 'Sé lo más específico posible: horario, qué comes y dónde.'],
    ['Para termos a melhor relação entre personal e aluno.', 'So we can have the best coach–student relationship.', 'Para tener la mejor relación entre entrenador y alumno.'],
    ['Nome completo', 'Full name', 'Nombre completo'], ['Plano contratado', 'Plan hired', 'Plan contratado'], ['Data de nascimento', 'Date of birth', 'Fecha de nacimiento'], ['Telefone com DDD', 'Phone with area code', 'Teléfono con código de área'],
    ['CPF', 'Tax ID (CPF)', 'CPF'], ['Estado onde mora', 'State where you live', 'Estado donde vives'], ['Endereço completo (CEP, bairro, rua e número)', 'Full address (ZIP code, neighborhood, street and number)', 'Dirección completa (código postal, barrio, calle y número)'],
    ['Em poucas palavras, qual o seu objetivo?', 'In a few words, what is your goal?', 'En pocas palabras, ¿cuál es tu objetivo?'], ['Altura (em metros)', 'Height (in meters)', 'Altura (en metros)'],
    ['Peso atual. Quando foi a última vez que se pesou? Tem balança em casa?', 'Current weight. When did you last weigh yourself? Do you have a scale at home?', 'Peso actual. ¿Cuándo fue la última vez que te pesaste? ¿Tienes balanza en casa?'],
    ['Teve alteração de peso nos últimos 3 meses? Explique', 'Any weight change in the last 3 months? Explain', '¿Tuviste cambios de peso en los últimos 3 meses? Explica'],
    ['Qual a sua ocupação (trabalho)?', 'What is your occupation (job)?', '¿Cuál es tu ocupación (trabajo)?'], ['Renda per capita (por pessoa) da sua residência', 'Per capita income (per person) of your household', 'Ingreso per cápita (por persona) de tu hogar'],
    ['Sintomas: com que frequência você sente cada um?', 'Symptoms: how often do you feel each one?', 'Síntomas: ¿con qué frecuencia sientes cada uno?'], ['Algum sintoma que queira adicionar?', 'Any other symptom you want to add?', '¿Algún síntoma que quieras agregar?'],
    ['Quem cozinha suas refeições?', 'Who cooks your meals?', '¿Quién cocina tus comidas?'], ['Mora com quantas pessoas? Qual o parentesco?', 'How many people do you live with? What is your relationship?', '¿Con cuántas personas vives? ¿Qué parentesco?'],
    ['Nível das suas fezes na escala de Bristol (1 a 7)', 'Stool type on the Bristol scale (1 to 7)', 'Tipo de heces en la escala de Bristol (1 a 7)'], ['Cor da sua urina na escala de Armstrong (1 a 8)', 'Urine color on the Armstrong scale (1 to 8)', 'Color de tu orina en la escala de Armstrong (1 a 8)'],
    ['Qual exercício físico você pratica?', 'What exercise do you do?', '¿Qué ejercicio físico practicas?'], ['Há quanto tempo você pratica?', 'How long have you been doing it?', '¿Hace cuánto tiempo lo practicas?'],
    ['Qual o tipo de academia que você frequenta?', 'What kind of gym do you go to?', '¿Qué tipo de gimnasio frecuentas?'], ['Qual horário você treina?', 'What time do you train?', '¿A qué hora entrenas?'],
    ['Com que frequência você treina?', 'How often do you train?', '¿Con qué frecuencia entrenas?'], ['Quanto tempo tem disponível para treinar?', 'How much time do you have to train?', '¿Cuánto tiempo tienes para entrenar?'],
    ['Qual musculatura tem maior enfoque em desenvolver agora?', 'Which muscle group do you most want to develop now?', '¿Qué musculatura quieres desarrollar más ahora?'], ['Qual seria o seu segundo maior enfoque?', 'What is your second main focus?', '¿Cuál sería tu segundo enfoque?'],
    ['Qual a sua divisão de treino atual?', 'What is your current training split?', '¿Cuál es tu división de entreno actual?'], ['Nessa divisão, quais exercícios e quantas séries de cada um?', 'In this split, which exercises and how many sets of each?', 'En esa división, ¿qué ejercicios y cuántas series de cada uno?'],
    ['Tem alguma limitação ou desconforto articular? Qual?', 'Do you have any joint limitation or discomfort? Which?', '¿Tienes alguna limitación o molestia articular? ¿Cuál?'], ['Já fez uso de esteroides anabolizantes? Quais e em que doses?', 'Have you used anabolic steroids? Which and what doses?', '¿Has usado esteroides anabólicos? ¿Cuáles y en qué dosis?'],
    ['Pratica algum outro esporte? Com que frequência e duração?', 'Do you play any other sport? How often and for how long?', '¿Practicas otro deporte? ¿Con qué frecuencia y duración?'],
    ['Aparelhos da sua academia (costas, peito, ombros, pernas) e o que sente falta', 'Equipment at your gym (back, chest, shoulders, legs) and what you miss', 'Equipos de tu gimnasio (espalda, pecho, hombros, piernas) y qué extrañas'],
    ['De 0 a 10, quão reparador é o seu sono?', 'From 0 to 10, how restful is your sleep?', 'De 0 a 10, ¿qué tan reparador es tu sueño?'], ['Quantas horas, em média, você dorme por noite?', 'On average, how many hours do you sleep per night?', '¿Cuántas horas, en promedio, duermes por noche?'],
    ['Alguma observação sobre o seu sono?', 'Any notes about your sleep?', '¿Alguna observación sobre tu sueño?'], ['Você fuma? Se sim, com que frequência?', 'Do you smoke? If so, how often?', '¿Fumas? Si es así, ¿con qué frecuencia?'],
    ['Consome bebidas alcoólicas? Com que frequência?', 'Do you drink alcohol? How often?', '¿Consumes bebidas alcohólicas? ¿Con qué frecuencia?'],
    ['Toma algum suplemento? Qual, como (horários e doses)?', 'Do you take any supplement? Which, how (times and doses)?', '¿Tomas algún suplemento? ¿Cuál, cómo (horarios y dosis)?'],
    ['Possui alguma alergia alimentar? Qual?', 'Do you have any food allergy? Which?', '¿Tienes alguna alergia alimentaria? ¿Cuál?'], ['Possui alguma intolerância alimentar? Qual?', 'Do you have any food intolerance? Which?', '¿Tienes alguna intolerancia alimentaria? ¿Cuál?'],
    ['Qual alimento você não gosta? (não entra no plano)', 'Which foods do you dislike? (they will not be in the plan)', '¿Qué alimento no te gusta? (no entra en el plan)'], ['Você come movido pela ansiedade com frequência? Explique', 'Do you often eat because of anxiety? Explain', '¿Comes frecuentemente por ansiedad? Explica'],
    ['Café da manhã: horário, o que come e onde', 'Breakfast: time, what you eat and where', 'Desayuno: horario, qué comes y dónde'], ['Lanche do meio da manhã: horário, o que come e onde', 'Mid-morning snack: time, what you eat and where', 'Merienda de media mañana: horario, qué comes y dónde'],
    ['Almoço: horário, o que come e onde', 'Lunch: time, what you eat and where', 'Almuerzo: horario, qué comes y dónde'], ['Refeição do meio da tarde: horário, o que come e onde', 'Mid-afternoon meal: time, what you eat and where', 'Comida de media tarde: horario, qué comes y dónde'],
    ['No final da tarde ou começo da noite você...', 'In the late afternoon or early evening you...', 'Al final de la tarde o comienzo de la noche tú...'], ['Jantar: horário, o que come e onde', 'Dinner: time, what you eat and where', 'Cena: horario, qué comes y dónde'],
    ['Ceia: horário, o que come e onde', 'Late snack: time, what you eat and where', 'Cena tardía: horario, qué comes y dónde'], ['Tem o hábito de pesar o que come? Tem balança de cozinha?', 'Do you weigh your food? Do you have a kitchen scale?', '¿Tienes el hábito de pesar lo que comes? ¿Tienes balanza de cocina?'],
    ['Usa algum medicamento contínuo? Qual e que dose?', 'Do you take any ongoing medication? Which and what dose?', '¿Usas algún medicamento continuo? ¿Cuál y qué dosis?'], ['Já passou por algum procedimento cirúrgico? Conte', 'Have you had any surgery? Tell us', '¿Has pasado por algún procedimiento quirúrgico? Cuéntanos'],
    ['Algum alimento, mesmo não "saudável", que gostaria muito na dieta?', 'Any food, even if not "healthy", you would really like in your diet?', '¿Algún alimento, aunque no sea "saludable", que te gustaría mucho en la dieta?'],
    ['Detalhe o seu objetivo: algum número em mente, físico que te inspira, ganho de massa ou perda de gordura?', 'Detail your goal: any number in mind, a physique that inspires you, muscle gain or fat loss?', 'Detalla tu objetivo: ¿algún número en mente, un físico que te inspire, ganar masa o perder grasa?'],
    ['Evite mandar áudios. Quando enviar, será considerado um assunto importante, e a resposta pode demorar mais.', 'Avoid sending voice messages. When you send one, it will be treated as important, and the reply may take longer.', 'Evita mandar audios. Cuando envíes uno, se considerará un tema importante y la respuesta puede demorar más.'],
    ['Quem ignorar as mensagens e não preencher os formulários de check-in não terá direito a renovação da consultoria.', 'Anyone who ignores messages and does not fill in the check-in forms will not be eligible for renewal.', 'Quien ignore los mensajes y no complete los formularios de check-in no tendrá derecho a renovar la asesoría.'],
    ['Atualizações e ajustes do protocolo têm prazo de até 72h úteis. Em dias úteis, você é respondido em até 24h.', 'Protocol updates and adjustments take up to 72 business hours. On business days, you get a reply within 24h.', 'Las actualizaciones y ajustes del protocolo tienen plazo de hasta 72 h hábiles. En días hábiles, recibes respuesta en hasta 24 h.'],
    ['Se a atualização do físico não for preenchida em até 15 dias após o envio, não será possível atualizar o protocolo.', 'If the physique update is not filled in within 15 days of being sent, the protocol cannot be updated.', 'Si la actualización del físico no se completa en hasta 15 días tras el envío, no será posible actualizar el protocolo.'],
    ['Estou ciente das regras da consultoria', 'I understand the coaching rules', 'Estoy al tanto de las reglas de la asesoría'],
    ['Nunca', 'Never', 'Nunca'], ['Raramente', 'Rarely', 'Raramente'], ['Ocasionalmente', 'Occasionally', 'Ocasionalmente'], ['Frequentemente', 'Frequently', 'Frecuentemente'],
    ['Dor de cabeça', 'Headache', 'Dolor de cabeza'], ['Insônia', 'Insomnia', 'Insomnio'], ['Dor de garganta', 'Sore throat', 'Dolor de garganta'], ['Aftas', 'Canker sores', 'Aftas'], ['Acne', 'Acne', 'Acné'],
    ['Perda de cabelo', 'Hair loss', 'Caída del cabello'], ['Suor excessivo', 'Excessive sweating', 'Sudoración excesiva'], ['Asma ou bronquite', 'Asthma or bronchitis', 'Asma o bronquitis'], ['Náuseas, vômito', 'Nausea, vomiting', 'Náuseas, vómitos'],
    ['Diarréia', 'Diarrhea', 'Diarrea'], ['Constipação', 'Constipation', 'Estreñimiento'], ['Azia', 'Heartburn', 'Acidez'], ['Dor muscular (não induzida por exercício)', 'Muscle pain (not caused by exercise)', 'Dolor muscular (no inducido por ejercicio)'],
    ['Dor articular (não induzida por exercício)', 'Joint pain (not caused by exercise)', 'Dolor articular (no inducido por ejercicio)'], ['Fadiga', 'Fatigue', 'Fatiga'], ['Hiperatividade', 'Hyperactivity', 'Hiperactividad'], ['Ansiedade', 'Anxiety', 'Ansiedad'],
    ['Depressão', 'Depression', 'Depresión'], ['Frequentemente doente', 'Frequently ill', 'Frecuentemente enfermo'],
    ['Rotina na segunda-feira', 'Routine on Monday', 'Rutina el lunes'], ['Rotina na terça-feira', 'Routine on Tuesday', 'Rutina el martes'], ['Rotina na quarta-feira', 'Routine on Wednesday', 'Rutina el miércoles'], ['Rotina na quinta-feira', 'Routine on Thursday', 'Rutina el jueves'],
    ['Rotina na sexta-feira', 'Routine on Friday', 'Rutina el viernes'], ['Rotina na sábado', 'Routine on Saturday', 'Rutina el sábado'], ['Rotina na domingo', 'Routine on Sunday', 'Rutina el domingo'],
    ['Anamnese concluída. Obrigado!', 'Health form completed. Thank you!', '¡Anamnesis completada. Gracias!'], ['Anamnese concluída', 'Health form completed', 'Anamnesis completada'],
    ['Se algo mudou (rotina, saúde, objetivo), atualize para o professor ajustar o seu plano.', 'If anything changed (routine, health, goal), update it so your coach can adjust your plan.', 'Si algo cambió (rutina, salud, objetivo), actualízalo para que el profesor ajuste tu plan.'],
    ['Atualizar minhas respostas', 'Update my answers', 'Actualizar mis respuestas'],
    ['Faltam campos obrigatórios (*): ', 'Required fields missing (*): ', 'Faltan campos obligatorios (*): '],
    ['Não foi possível salvar agora. Tente de novo.', 'Could not save right now. Please try again.', 'No se pudo guardar ahora. Inténtalo de nuevo.'],
    // ---------------- evolução ----------------
    ['Avaliações', 'Assessments', 'Evaluaciones'], ['Fotos', 'Photos', 'Fotos'], ['Metas', 'Goals', 'Metas'], ['Nova avaliação', 'New assessment', 'Nueva evaluación'], ['Nova meta', 'New goal', 'Nueva meta'],
    ['Histórico', 'History', 'Historial'], ['Excluir', 'Delete', 'Eliminar'], ['Peso', 'Weight', 'Peso'], ['Gordura', 'Body fat', 'Grasa'], ['% de gordura', '% body fat', '% de grasa'],
    ['Registre pelo menos duas avaliações para ver o gráfico.', 'Log at least two assessments to see the chart.', 'Registra al menos dos evaluaciones para ver el gráfico.'],
    ['Nenhuma avaliação registrada ainda.', 'No assessments logged yet.', 'Aún no hay evaluaciones registradas.'], ['Nenhuma foto enviada ainda.', 'No photos uploaded yet.', 'Aún no hay fotos enviadas.'],
    ['Nenhuma meta definida. Que tal começar com uma?', 'No goals set. How about starting with one?', 'Ninguna meta definida. ¿Qué tal empezar con una?'],
    ['Data', 'Date', 'Fecha'], ['Peso (kg)', 'Weight (kg)', 'Peso (kg)'], ['Gordura (%)', 'Body fat (%)', 'Grasa (%)'], ['Medidas (cm) — opcional', 'Measurements (cm) — optional', 'Medidas (cm) — opcional'],
    ['Cintura', 'Waist', 'Cintura'], ['Abdômen', 'Abdomen', 'Abdomen'], ['Quadril', 'Hips', 'Cadera'], ['Peitoral', 'Chest', 'Pecho'], ['Braço dir.', 'Right arm', 'Brazo der.'], ['Braço esq.', 'Left arm', 'Brazo izq.'],
    ['Coxa dir.', 'Right thigh', 'Muslo der.'], ['Coxa esq.', 'Left thigh', 'Muslo izq.'], ['Panturrilha', 'Calf', 'Pantorrilla'], ['Observações', 'Notes', 'Observaciones'], ['Salvar avaliação', 'Save assessment', 'Guardar evaluación'],
    ['enviada pelo aluno', 'sent by you', 'enviada por ti'], ['professor', 'coach', 'profesor'], ['Excluir esta avaliação?', 'Delete this assessment?', '¿Eliminar esta evaluación?'],
    ['Adicionar foto', 'Add photo', 'Agregar foto'], ['Posição', 'Pose', 'Posición'], ['Frente', 'Front', 'Frente'], ['Costas', 'Back', 'Espalda'], ['Lado', 'Side', 'Lado'], ['Livre', 'Free', 'Libre'],
    ['Tirar ou escolher foto', 'Take or choose a photo', 'Tomar o elegir foto'], ['Antes e depois', 'Before and after', 'Antes y después'], ['Todas as fotos', 'All photos', 'Todas las fotos'], ['Excluir foto', 'Delete photo', 'Eliminar foto'],
    ['Dica: celular na altura do tronco, boa iluminação, corpo todo à vista. As fotos ficam visíveis só para você e o professor.', 'Tip: phone at torso height, good lighting, full body in view. Photos are visible only to you and your coach.', 'Consejo: celular a la altura del torso, buena iluminación, cuerpo completo a la vista. Las fotos solo las ven tú y el profesor.'],
    ['Título', 'Title', 'Título'], ['Tipo', 'Type', 'Tipo'], ['Valor atual', 'Current value', 'Valor actual'], ['Valor da meta', 'Goal value', 'Valor de la meta'], ['Prazo', 'Deadline', 'Plazo'], ['Salvar meta', 'Save goal', 'Guardar meta'],
    ['Outra meta (marco manual)', 'Other goal (manual milestone)', 'Otra meta (hito manual)'], ['Concluída', 'Completed', 'Completada'], ['concluída', 'completed', 'completada'], ['Reabrir', 'Reopen', 'Reabrir'],
    ['Dê um título à meta', 'Give the goal a title', 'Ponle un título a la meta'], ['Informe o valor da meta', 'Enter the goal value', 'Indica el valor de la meta'], ['Preencha pelo menos um valor', 'Fill in at least one value', 'Completa al menos un valor'],
    ['Ex.: Chegar a 78 kg', 'E.g.: Reach 78 kg', 'Ej.: Llegar a 78 kg'], ['Excluir esta meta?', 'Delete this goal?', '¿Eliminar esta meta?'], ['Excluir esta foto?', 'Delete this photo?', '¿Eliminar esta foto?'],
    ['Avaliação salva', 'Assessment saved', 'Evaluación guardada'], ['Meta salva', 'Goal saved', 'Meta guardada'], ['Foto enviada', 'Photo uploaded', 'Foto enviada'], ['Enviando foto...', 'Uploading photo...', 'Enviando foto...'],
    ['Não foi possível enviar a foto', 'Could not upload the photo', 'No se pudo enviar la foto'],
    // ---------------- chat, perfil, avisos ----------------
    ['Meta do dia cumprida', 'Daily goal achieved', 'Meta del día cumplida'],
    ['Boa! Volte amanhã para começar sua sequência.', 'Nice! Come back tomorrow to start your streak.', '¡Bien! Vuelve mañana para empezar tu racha.'],
    ['Digite o código', 'Enter the code', 'Escribe el código'],
    ['Missão do dia', 'Daily mission', 'Misión del día'], ['Completar missão', 'Complete mission', 'Completar misión'],
    ['Mensagem...', 'Message...', 'Mensaje...'], ['Grupo L Body', 'L Body group', 'Grupo L Body'], ['Nenhuma mensagem ainda. Seja o primeiro.', 'No messages yet. Be the first.', 'Aún no hay mensajes. Sé el primero.'],
    ['apagar', 'delete', 'borrar'], ['agora mesmo', 'just now', 'ahora mismo'], ['Ver todos os níveis', 'See all levels', 'Ver todos los niveles'],
  ].forEach(r => add(r[0], r[1], r[2]));

  // ---------------- padrões com números, datas e nomes ----------------
  const EN_D = { Seg: 'Mon', Ter: 'Tue', Qua: 'Wed', Qui: 'Thu', Sex: 'Fri', 'Sáb': 'Sat', Dom: 'Sun' };
  const ES_D = { Seg: 'Lun', Ter: 'Mar', Qua: 'Mié', Qui: 'Jue', Sex: 'Vie', 'Sáb': 'Sáb', Dom: 'Dom' };
  const MES = { Janeiro: ['January', 'Enero'], Fevereiro: ['February', 'Febrero'], 'Março': ['March', 'Marzo'], Abril: ['April', 'Abril'], Maio: ['May', 'Mayo'], Junho: ['June', 'Junio'], Julho: ['July', 'Julio'], Agosto: ['August', 'Agosto'], Setembro: ['September', 'Septiembre'], Outubro: ['October', 'Octubre'], Novembro: ['November', 'Noviembre'], Dezembro: ['December', 'Diciembre'] };
  const DIAL = { segunda: ['Monday', 'lunes'], 'terça': ['Tuesday', 'martes'], quarta: ['Wednesday', 'miércoles'], quinta: ['Thursday', 'jueves'], sexta: ['Friday', 'viernes'], 'sábado': ['Saturday', 'sábado'], domingo: ['Sunday', 'domingo'] };
  const pl = (n, en1, enN, es1, esN) => (idx() === 0 ? (n === 1 ? en1 : enN) : (n === 1 ? es1 : esN));
  const dayWords = s => s.replace(/\b(Seg|Ter|Qua|Qui|Sex|Sáb|Dom)\b/g, m => (idx() === 0 ? EN_D : ES_D)[m]);
  const RULES = [
    [/^Erro ao salvar:? ?(.*)$/, m => (idx() === 0 ? 'Could not save: ' : 'No se pudo guardar: ') + m[1]],
    [/^Erro ao enviar:? ?(.*)$/, m => (idx() === 0 ? 'Could not send: ' : 'No se pudo enviar: ') + m[1]],
    [/^📩 Mensagem do Professor:\s*([\s\S]*)$/, m => (idx() === 0 ? '📩 Message from your coach:\n\n' : '📩 Mensaje de tu entrenador:\n\n') + m[1]],
    [/^concluiu a missão: (.+) ⚡$/, m => (idx() === 0 ? 'completed the mission: ' : 'completó la misión: ') + (translate(m[1]) || m[1]) + ' ⚡'],
    [/^desbloqueou a conquista: (.+) 🎖️$/, m => (idx() === 0 ? 'unlocked the achievement: ' : 'desbloqueó el logro: ') + (translate(m[1]) || m[1]) + ' 🎖️'],
    [/^subiu para o nível (.+)! 🏆$/, m => (idx() === 0 ? 'reached level ' : 'subió al nivel ') + m[1] + '! 🏆'],
    [/^\+(\d+) pontos$/, m => `+${m[1]} ${idx() === 0 ? 'points' : 'puntos'}`],
    [/^Proteja sua sequência de (\d+) dias?$/, m => (idx() === 0 ? `Protect your ${m[1]}-day streak` : `Protege tu racha de ${m[1]} ${+m[1] === 1 ? 'día' : 'días'}`)],
    [/^Sequência de (\d+) dias? garantida\. Amanhã tem mais\.$/, m => (idx() === 0 ? `${m[1]}-day streak secured. More tomorrow.` : `Racha de ${m[1]} ${+m[1] === 1 ? 'día' : 'días'} asegurada. Mañana hay más.`)],
    [/^Nível (\d+)$/, m => (idx() === 0 ? `Level ${m[1]}` : `Nivel ${m[1]}`)],
    [/^(\d+) refeições$/, m => (idx() === 0 ? `${m[1]} meals` : `${m[1]} comidas`)],
    [/^(\d+) dias?$/, m => (idx() === 0 ? `${m[1]} ${+m[1] === 1 ? 'day' : 'days'}` : `${m[1]} ${+m[1] === 1 ? 'día' : 'días'}`)],
    [/^Plano vence em (\d+) dias?$/, m => (idx() === 0 ? `Plan expires in ${m[1]} ${+m[1] === 1 ? 'day' : 'days'}` : `El plan vence en ${m[1]} ${+m[1] === 1 ? 'día' : 'días'}`)],
    [/^Treino vence em (\d+) dias?$/, m => (idx() === 0 ? `Workout expires in ${m[1]} ${+m[1] === 1 ? 'day' : 'days'}` : `El entreno vence en ${m[1]} ${+m[1] === 1 ? 'día' : 'días'}`)],
    [/^Seu plano (venceu|vence) em (.+)\. Fale com o professor para renovar\.$/, m => (idx() === 0 ? `Your plan ${m[1] === 'venceu' ? 'expired' : 'expires'} on ${m[2]}. Talk to your coach to renew.` : `Tu plan ${m[1] === 'venceu' ? 'venció' : 'vence'} el ${m[2]}. Habla con el profesor para renovar.`)],
    [/^Seu plano vence hoje \((.+)\)\. Fale com o professor para renovar\.$/, m => (idx() === 0 ? `Your plan expires today (${m[1]}). Talk to your coach to renew.` : `Tu plan vence hoy (${m[1]}). Habla con el profesor para renovar.`)],
    [/^Seu plano vence em (.+)\. Combine a renovação com o professor\.$/, m => (idx() === 0 ? `Your plan expires on ${m[1]}. Arrange the renewal with your coach.` : `Tu plan vence el ${m[1]}. Acuerda la renovación con el profesor.`)],
    [/^Seu treino (.+) (venceu|vence) em (.+)\. (Fale com o professor para renovar|Combine a renovação com o professor)\.$/, m => (idx() === 0 ? `Your workout ${m[1]} ${m[2] === 'venceu' ? 'expired' : 'expires'} on ${m[3]}. ${m[4].startsWith('Fale') ? 'Talk to your coach to renew' : 'Arrange the renewal with your coach'}.` : `Tu entreno ${m[1]} ${m[2] === 'venceu' ? 'venció' : 'vence'} el ${m[3]}. ${m[4].startsWith('Fale') ? 'Habla con el profesor para renovar' : 'Acuerda la renovación con el profesor'}.`)],
    [/^A rotina (.*) (venceu|vence) em (.+)\.$/, m => (idx() === 0 ? `The routine ${m[1]} ${m[2] === 'venceu' ? 'expired' : 'expires'} on ${m[3]}.` : `La rutina ${m[1]} ${m[2] === 'venceu' ? 'venció' : 'vence'} el ${m[3]}.`)],
    [/^Plano vence em (\d+) (dia|dias)$/, null],
    [/^Compromisso hoje · (.*)$/, m => (idx() === 0 ? `Appointment today · ${m[1]}` : `Compromiso hoy · ${m[1]}`)],
    [/^(.*) às (\d{2}:\d{2})(.*)$/, m => `${dayWords(m[1]).replace('Hoje', idx() === 0 ? 'Today' : 'Hoy').replace('Amanhã', idx() === 0 ? 'Tomorrow' : 'Mañana')} ${idx() === 0 ? 'at' : 'a las'} ${m[2]}${m[3]}`],
    [/^(Seg|Ter|Qua|Qui|Sex|Sáb|Dom), (\d{2}\/\d{2})$/, m => `${dayWords(m[1])}, ${m[2]}`],
    [/^((?:Seg|Ter|Qua|Qui|Sex|Sáb|Dom)(?:, | e )?)+$/, m => dayWords(m[0]).replace(/ e /g, idx() === 0 ? ' and ' : ' y ')],
    [/^(\d+) min$/, m => `${m[1]} min`],
    [/^Série combinada · (\d+) exercícios$/, m => (idx() === 0 ? `Combined set · ${m[1]} exercises` : `Serie combinada · ${m[1]} ejercicios`)],
    [/^Intervalo: (\d+)s$/, m => `${idx() === 0 ? 'Rest' : 'Descanso'}: ${m[1]}s`],
    [/^Séries: (.+)$/, m => `${idx() === 0 ? 'Sets' : 'Series'}: ${m[1]}`],
    [/^Carga: (.+)$/, m => `${idx() === 0 ? 'Load' : 'Carga'}: ${m[1]}`],
    [/^Executado (\d+) vezes?, última execução em (.+)$/, m => (idx() === 0 ? `Done ${m[1]} ${+m[1] === 1 ? 'time' : 'times'}, last on ${m[2]}` : `Realizado ${m[1]} ${+m[1] === 1 ? 'vez' : 'veces'}, última vez el ${m[2]}`)],
    [/^Semana de (.+) a (.+)\. (Você já enviou — pode atualizar se quiser\.|Conte ao professor como foi\.)$/, m => (idx() === 0 ? `Week of ${m[1]} to ${m[2]}. ${m[3].startsWith('Você') ? 'You already sent it — you can update it if you like.' : 'Tell your coach how it went.'}` : `Semana del ${m[1]} al ${m[2]}. ${m[3].startsWith('Você') ? 'Ya lo enviaste — puedes actualizarlo si quieres.' : 'Cuéntale al profesor cómo fue.'}`)],
    [/^Etapa (\d+) de (\d+) · (.+)$/, m => (idx() === 0 ? `Step ${m[1]} of ${m[2]}` : `Paso ${m[1]} de ${m[2]}`) + ' · ' + (D[m[3]] ? D[m[3]][idx()] : m[3])],
    [/^Atualizado em (.+) · (\d+) KB$/, m => (idx() === 0 ? `Updated on ${m[1]} · ${m[2]} KB` : `Actualizado el ${m[1]} · ${m[2]} KB`)],
    [/^Atualizada em (.+)$/, m => (idx() === 0 ? `Updated on ${m[1]}` : `Actualizada el ${m[1]}`)],
    [/^Peso · ([+-]?[\d,]+) kg desde o início$/, m => (idx() === 0 ? `Weight · ${m[1]} kg since the start` : `Peso · ${m[1]} kg desde el inicio`)],
    [/^% de gordura · ([+-]?[\d,]+) pontos$/, m => (idx() === 0 ? `% body fat · ${m[1]} points` : `% de grasa · ${m[1]} puntos`)],
    [/^Atual ([\d,]+) · meta ([\d,]+) · faltam ([\d,]+)(.*)$/, m => (idx() === 0 ? `Current ${m[1]} · goal ${m[2]} · ${m[3]} to go` : `Actual ${m[1]} · meta ${m[2]} · faltan ${m[3]}`) + (m[4] ? rewriteDays(m[4]) : '')],
    [/^Faltam (\d+) dias$/, m => (idx() === 0 ? `${m[1]} days left` : `Faltan ${m[1]} días`)],
    [/^(.*)faltam (\d+) dias(?: \((.+)\))?$/, m => (idx() === 0 ? `${m[2]} days left${m[3] ? ' (' + m[3] + ')' : ''}` : `faltan ${m[2]} días${m[3] ? ' (' + m[3] + ')' : ''}`)],
    [/^Meta ([\d,]+)$/, m => (idx() === 0 ? `Goal ${m[1]}` : `Meta ${m[1]}`)],
    [/^Semana (\d{2}\/\d{2}) a (\d{2}\/\d{2})$/, m => (idx() === 0 ? `Week ${m[1]} to ${m[2]}` : `Semana ${m[1]} al ${m[2]}`)],
    [/^(Combatente|Iniciante|Determinado|Guerreiro|Veloz|Resistente)( · .*)?$/, null],
    [/^(\d+) dias? seq\.$/, null],
    [/^Erro ao (salvar|enviar): (.*)$/, m => (idx() === 0 ? `Error ${m[1] === 'salvar' ? 'saving' : 'sending'}: ${m[2]}` : `Error al ${m[1] === 'salvar' ? 'guardar' : 'enviar'}: ${m[2]}`)],
    [/^Rotina na (.+)$/, m => { const w = Object.keys(DIAL).find(k => m[1].startsWith(k)); return w ? (idx() === 0 ? 'Routine on ' : 'Rutina el ') + DIAL[w][idx()] : null; }],
    [/^Qual horário você realiza (?:seu|sua|o) (.+?)\?.*$/, null],
  ];
  function rewriteDays(s) { return s.replace(/faltam (\d+) dias(?: \((.+)\))?/, (a, n, d) => (idx() === 0 ? `${n} days left` : `faltan ${n} días`) + (d ? ` (${d})` : '')).replace(/^ · /, ' · '); }

  // ---------------- tradução de um texto ----------------
  function translate(raw) {
    const m = raw.match(/^(\s*)([\s\S]*?)(\s*)$/); const lead = m[1], core = m[2], trail = m[3];
    if (!core) return null;
    let star = ''; let body = core;
    if (/ \*$/.test(body)) { star = ' *'; body = body.slice(0, -2); }
    let out = null;
    if (D[body]) out = D[body][idx()];
    else {
      for (const [re, fn] of RULES) { if (!fn) continue; const r = body.match(re); if (r) { const v = fn(r); if (v) { out = v; break; } } }
    }
    if (out == null) { // texto com emoji/símbolo na frente (ex.: "🔔 Ativar avisos"): traduz só a parte em letras
      const mm = body.match(/^([^A-Za-zÀ-ÿ]+)([A-Za-zÀ-ÿ][\s\S]*)$/);
      if (mm && mm[2] !== body) { const inner = translate(mm[2]); if (inner != null) out = mm[1] + inner.replace(/^\s+/, ''); }
    }
    return out == null ? null : lead + out + star + trail;
  }

  // ---------------- varredura do DOM ----------------
  const TEXT = new WeakMap(); const ATTR = ['placeholder', 'title', 'aria-label', 'alt'];
  function textNode(n) {
    const rec = TEXT.get(n); let pt = n.nodeValue;
    if (rec && n.nodeValue === rec.out) pt = rec.pt;
    if (L() === 'pt') { if (rec && n.nodeValue !== rec.pt) { n.nodeValue = rec.pt; } TEXT.delete(n); return; }
    const out = translate(pt);
    if (out == null) { TEXT.delete(n); return; }
    if (n.nodeValue !== out) n.nodeValue = out;
    TEXT.set(n, { pt, out });
  }
  function attrs(el) {
    ATTR.forEach(a => {
      const v = el.getAttribute && el.getAttribute(a); if (!v) return;
      const key = '__lb_' + a; const rec = el[key]; let pt = v; if (rec && v === rec.out) pt = rec.pt;
      if (L() === 'pt') { if (rec && v !== rec.pt) el.setAttribute(a, rec.pt); el[key] = null; return; }
      const out = translate(pt); if (out == null) { el[key] = null; return; }
      if (v !== out) el.setAttribute(a, out); el[key] = { pt, out };
    });
  }
  function scan(root) {
    if (!root) return;
    const skip = el => el && el.closest && el.closest('#screen-admin,script,style,[data-no-i18n]');
    if (root.nodeType === 3) { if (!skip(root.parentElement)) textNode(root); return; }
    if (root.nodeType !== 1 || skip(root)) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let n;
    while ((n = w.nextNode())) { if (!skip(n.parentElement)) textNode(n); }
    attrs(root); root.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(e => { if (!skip(e)) attrs(e); });
  }
  let busy = false, queued = false;
  function run() { if (busy) { queued = true; return; } busy = true; try { scan(document.body); } finally { busy = false; } if (queued) { queued = false; setTimeout(run, 0); } }
  const mo = new MutationObserver(muts => {
    if (busy) return; busy = true;
    try { muts.forEach(m => { if (m.type === 'characterData') scan(m.target); else if (m.type === 'attributes') { if (m.target.nodeType === 1) attrs(m.target); } else m.addedNodes.forEach(scan); }); } finally { busy = false; }
  });
  function start() { mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR }); run(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();

  // quando troca o idioma
  const wrap = () => { if (typeof setLang === 'function' && !setLang.__lb) { const o = setLang; const w = function (l) { o(l); setTimeout(run, 30); setTimeout(run, 400); }; w.__lb = 1; window.setLang = w; } };
  wrap(); window.addEventListener('load', wrap);
  // janelas do navegador (alert, confirm, prompt) também passam pelo dicionário
  ['alert', 'confirm', 'prompt'].forEach(fn => {
    const o = window[fn]; if (!o || o.__lb) return;
    const w = function (msg, ...rest) { let m = msg; try { if (L() !== 'pt' && typeof msg === 'string') { const t2 = translate(msg); if (t2 != null) m = t2; } } catch (e) {} return o.call(window, m, ...rest); };
    w.__lb = 1; window[fn] = w;
  });
  window.LBI18N = { run, translate, D, miss: () => { const out = new Set(); const w = document.createTreeWalker(document.getElementById('screen-app') || document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) { const t = n.nodeValue.replace(/\s+/g, ' ').trim(); if (t && /[À-ú]|\b(você|seu|sua|para|com|que|não|dias?|treino|hoje)\b/i.test(t) && !TEXT.get(n)) out.add(t); } return [...out]; } };
})();
