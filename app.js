/* ==========================================================================
   LÓGICA HMI KOSTAL - SIMULACIÓN E INTERACTIVIDAD DE ALTA FIDELIDAD (JS)
   ========================================================================== */

// 1. Diccionario de Traducciones (Español / Inglés)
const translations = {
  es: {
    system_title: "SISTEMA HMI DE INSPECCIÓN",
    system_subtitle: "Línea de Ensamblado & Calidad KOSTAL",
    label_user: "Usuario",
    label_pass: "Contraseña",
    btn_login: "Iniciar Sesión",
    demo_login_title: "Accesos Directos de Simulación (DEMO):",
    developed_by: "Desarrollado en alianza con",
    station_desc: "Estación de Inserción y Matriz de Emblemas",
    status_ready: "SISTEMA LISTO",
    status_active: "CICLO ACTIVO",
    status_waiting: "ESPERANDO OPERADOR",
    status_finished: "SECUENCIA TERMINADA",
    status_warning: "ADVERTENCIA EN SISTEMA",
    status_error: "NOK DETECTADO",
    role_operator: "OPERADOR",
    role_admin: "ADMINISTRADOR",
    product_info_title: "Producto Actual",
    model_label: "Modelo:",
    program_label: "Programa:",
    matrix_label: "Matriz Fixture:",
    scheduled_label: "Piezas Programadas:",
    completed_label: "Piezas Realizadas:",
    shift_time_title: "Sesión y Jornada",
    shift_operator: "Operador:",
    shift_start: "Hora de Inicio:",
    shift_duration: "Tiempo de Sesión:",
    first_seq_start: "Primera Secuencia:",
    first_seq_delta: "Login → 1ª Secuencia:",
    demo_controls_title: "Simulador HMI (DEMO)",
    demo_help: "Puedes hacer clic directamente en las piezas de la matriz central para cambiar su estado (OK, NOK, Activa, Pendiente) de forma interactiva.",
    btn_demo_reset: "Reiniciar Matriz",
    btn_demo_fill_ok: "Llenar todo OK",
    matrix_view_title: "Estado del Fixture - Matriz de Piezas (3 × 5)",
    legend_pending: "Pendiente",
    legend_active: "Activa",
    legend_ok: "Procesada OK",
    legend_nok: "Procesada NOK",
    production_kpis_title: "Indicadores de Producción",
    kpi_total: "TOTAL",
    kpi_quality: "% CALIDAD",
    kpi_ok: "PIEZAS OK",
    kpi_nok: "PIEZAS NOK",
    kpi_downtime: "% TIEMPO MUERTO",
    operation_control_title: "Control de Secuencia",
    cycle_status_off: "○ OFF / SISTEMA DETENIDO",
    cycle_status_on: "● ON / CICLO ACTIVO",
    cycle_status_done: "● ON / SECUENCIA TERMINADA",
    operation_help: "Presiona ON para iniciar el ciclo activo de inspección en el fixture.",
    nav_programs: "Programas",
    nav_stats: "Estadísticas",
    nav_users: "Usuarios",
    btn_logout: "Cerrar Sesión",
    admin_programs_title: "Programas de producción",
    admin_programs_subtitle: "Configuración de productos, matrices y coordenadas.",
    placeholder_search_prog: "Buscar receta...",
    btn_new_program: "NUEVA RECETA",
    col_name: "Nombre",
    col_model: "Modelo",
    col_program: "Programa",
    col_matrix: "Matriz",
    col_dist_x: "Distancia centro en X",
    col_dist_y: "Distancia centro en Y",
    col_modified: "Última Modificación",
    col_status: "Estado",
    col_actions: "Acciones",
    filters_title: "Filtros de Búsqueda",
    filter_date_from: "Fecha Desde",
    filter_date_to: "Fecha Hasta",
    filter_user: "Usuario",
    opt_all_users: "Todos los usuarios",
    filter_model: "Modelo",
    opt_all_models: "Todos los modelos",
    filter_shift: "Turno",
    opt_all_shifts: "Todos los turnos",
    opt_shift_1: "Turno 1 (Matutino)",
    opt_shift_2: "Turno 2 (Vespertino)",
    opt_shift_3: "Turno 3 (Nocturno)",
    btn_filter: "Filtrar",
    btn_export: "Exportar a Excel (CSV)",
    stat_kpi_total: "TOTAL PRODUCIDO",
    stat_kpi_ok: "TOTAL PIEZAS OK",
    stat_kpi_nok: "TOTAL PIEZAS NOK",
    stat_kpi_avg_login: "AVG LOGIN → 1ª SEC.",
    stat_kpi_avg_session: "AVG DURACIÓN SESIÓN",
    stat_kpi_sub_session: "Jornadas completas",
    col_h_date: "Fecha",
    col_h_user: "Usuario",
    col_h_login: "Inicio Sesión",
    col_h_first_seq: "1ª Secuencia",
    col_h_delta: "Delta Login-1ª Sec",
    col_h_model: "Modelo",
    col_h_program: "Prog",
    col_h_total: "Total",
    col_h_ok: "OK",
    col_h_nok: "NOK",
    col_h_quality: "% Calidad",
    col_h_logout: "Fin Sesión",
    col_h_duration: "Duración Jornada",
    usr_kpi_active: "Usuarios Activos:",
    usr_kpi_operators: "Operadores:",
    usr_kpi_admins: "Administradores:",
    btn_new_user: "NUEVO USUARIO",
    col_u_id: "ID Empleado",
    col_u_name: "Nombre completo",
    col_u_user: "Nombre de usuario",
    col_u_role: "Rol",
    col_u_status: "Estado",
    col_u_access: "Último acceso",
    col_u_actions: "Acciones",
    pf1_title: "Configuración de programa",
    pf1_subtitle: "Modelo / matriz / posicionamiento de ejes (Modo JOG)",
    pf1_recipe_info: "Información General",
    pf1_lbl_name: "Nombre Receta",
    pf1_lbl_model: "Modelo",
    pf1_lbl_program: "Código Programa",
    pf1_lbl_matrix_cols: "Matriz X (Col)",
    pf1_lbl_matrix_rows: "Matriz Y (Filas)",
    pf1_axis_x: "EJE X - Distancia entre Centros (Horizontal)",
    pf1_lbl_jog_step: "Paso JOG",
    pf1_axis_y: "EJE Y - Distancia entre Centros (Vertical)",
    btn_ref_up: "SUBIR",
    btn_ref_down: "BAJAR",
    pf1_summary_title: "Resumen de Parámetros Activos:",
    sum_lbl_prog: "Programa:",
    sum_lbl_matrix: "Matriz:",
    sum_lbl_x: "Distancia centro en X:",
    sum_lbl_y: "Distancia centro en Y:",
    sum_lbl_modified: "Última Modif:",
    sum_lbl_user: "Modificado por:",
    btn_cancel: "Cancelar",
    btn_save_config: "GUARDAR CONFIGURACIÓN",
    new_user_title: "Crear Nuevo Usuario",
    new_user_subtitle: "Registrar credenciales y asignar nivel de acceso",
    lbl_nu_name: "Nombre Completo",
    lbl_nu_emp_num: "Número de Empleado (ID)",
    lbl_nu_username: "Nombre de Usuario",
    lbl_nu_role: "Rol en el Sistema",
    opt_nu_oper: "Operador",
    opt_nu_admin: "Administrador",
    lbl_nu_pass: "Contraseña",
    lbl_nu_pass_conf: "Confirmar Contraseña",
    lbl_nu_status: "Estado de Cuenta:",
    status_active_txt: "Activo",
    status_inactive_txt: "Inactivo",
    btn_create_user: "CREAR USUARIO",
    detail_user_title: "Productividad del Operador",
    detail_user_subtitle: "Métricas e histórico del empleado en la estación",
    det_lbl_total_shifts: "Jornadas Registradas",
    det_lbl_total_prod: "Piezas Producidas",
    det_lbl_ok: "Piezas OK",
    det_lbl_nok: "Piezas NOK",
    det_lbl_efficiency: "Calidad Promedio",
    det_lbl_delta: "Avg Login → 1ª Sec",
    det_last_shift_title: "Métricas de Última Jornada",
    det_last_date: "Fecha:",
    det_last_login: "Inicio / Cierre Sesión:",
    det_last_duration: "Duración Jornada:",
    det_last_pieces: "Producción (OK / NOK):",
    btn_close: "Cerrar",
    admin_users_title: "Gestión de usuarios",
    admin_users_subtitle: "Administración de operadores y administradores del sistema.",
    admin_stats_title: "Estadísticas de producción",
    admin_stats_subtitle: "Histórico general de rendimiento, piezas y tiempos de la estación.",
    toast_login_success: "Inicio de sesión correcto. ¡Bienvenido!",
    toast_login_fail: "Usuario o contraseña inválidos.",
    toast_logout: "Sesión cerrada correctamente.",
    toast_zero_set: "Coordenadas del sistema establecidas en Cero.",
    toast_axis_up: "Eje Z subiendo a posición segura...",
    toast_axis_down: "Eje Z bajando a posición de contacto...",
    toast_save_recipe: "Configuración de receta guardada exitosamente.",
    toast_create_user: "Usuario creado exitosamente.",
    toast_pass_mismatch: "Las contraseñas no coinciden.",
    toast_cycle_started: "Simulación de ciclo activa en el fixture.",
    toast_cycle_stopped: "Ciclo de inspección detenido manualmente.",
    
    // Agregados del mockup
    process_info_title: "Información de proceso",
    piece_image_title: "Imagen de la pieza",
    piece_info_title: "Información de la pieza",
    btn_home: "Botón de home",
    btn_emergency: "PARO EMERGENCIA",
    btn_start: "INICIO",
    toast_emergency_active: "¡PARO DE EMERGENCIA ACTIVO!",
    toast_emergency_inactive: "Paro de emergencia desactivado. Sistema restaurado.",
    toast_home_active: "Ejes regresando a posición HOME... Posicionados correctamente.",
    toast_setpoint: "Setpoint de pieza seleccionado.",
    toast_return_zero: "Retornando ejes a coordenada Cero de máquina.",
    btn_toggle_settings: "Ajustes HMI",
    recipe_select_label: "Receta Activa:",
    nav_settings: "Ajustes Globales",
    admin_settings_title: "Configuración del HMI",
    admin_settings_subtitle: "Ajustes globales de la estación, límites de inactividad y parámetros.",
    toast_settings_saved: "Ajustes guardados exitosamente.",
    toast_delete_user_success: "Usuario eliminado exitosamente.",
    downtime_block_title: "SISTEMA DETENIDO - JUSTIFICACIÓN DE TIEMPO MUERTO",
    downtime_block_desc: "El tiempo de inactividad ha superado el límite permitido. Seleccione un motivo para continuar.",
    btn_justify: "Justificar y Reanudar",
    hourly_block_title: "SISTEMA BLOQUEADO - REGISTRO DE FIN DE HORA",
    hourly_block_desc: "Por favor ingrese el conteo físico de piezas OK y NOK de la última hora para continuar.",
    btn_register: "Registrar y Reanudar"
  },
  en: {
    system_title: "HMI INSPECTION SYSTEM",
    system_subtitle: "KOSTAL Assembly & Quality Line",
    label_user: "Username",
    label_pass: "Password",
    btn_login: "Sign In",
    demo_login_title: "Simulation Access Shortcuts (DEMO):",
    developed_by: "Developed in partnership with",
    station_desc: "Emblem Insertion Station & Nest Matrix",
    status_ready: "SYSTEM READY",
    status_active: "CYCLE ACTIVE",
    status_waiting: "WAITING FOR OPERATOR",
    status_finished: "SEQUENCE COMPLETED",
    status_warning: "SYSTEM WARNING",
    status_error: "NOK DETECTED",
    role_operator: "OPERATOR",
    role_admin: "ADMINISTRATOR",
    product_info_title: "Current Product",
    model_label: "Model:",
    program_label: "Program:",
    matrix_label: "Nest Matrix:",
    scheduled_label: "Scheduled Pieces:",
    completed_label: "Processed Pieces:",
    shift_time_title: "Session & Shift",
    shift_operator: "Operator:",
    shift_start: "Start Time:",
    shift_duration: "Session Duration:",
    first_seq_start: "First Sequence:",
    first_seq_delta: "Login → 1st Sequence:",
    demo_controls_title: "HMI Simulator (DEMO)",
    demo_help: "You can click directly on the nests in the central matrix to cycle their states (OK, NOK, Active, Pending) interactively.",
    btn_demo_reset: "Reset Nest Matrix",
    btn_demo_fill_ok: "Fill all as OK",
    matrix_view_title: "Fixture Nest Status - Matrix (3 × 5)",
    legend_pending: "Pending",
    legend_active: "Active",
    legend_ok: "Processed OK",
    legend_nok: "Processed NOK",
    production_kpis_title: "Production KPIs",
    kpi_total: "TOTAL",
    kpi_quality: "% QUALITY",
    kpi_ok: "OK PIECES",
    kpi_nok: "NOK PIECES",
    kpi_downtime: "% DOWNTIME",
    operation_control_title: "Sequence Control",
    cycle_status_off: "○ OFF / SYSTEM STOPPED",
    cycle_status_on: "● ON / CYCLE ACTIVE",
    cycle_status_done: "● ON / SEQUENCE COMPLETED",
    operation_help: "Press ON to launch the active inspection cycle on the fixture.",
    nav_programs: "Recipes",
    nav_stats: "Statistics",
    nav_users: "Users",
    btn_logout: "Sign Out",
    admin_programs_title: "Production Recipes",
    admin_programs_subtitle: "Products, nest matrices and coordinates configuration.",
    placeholder_search_prog: "Search recipe...",
    btn_new_program: "NEW RECIPE",
    col_name: "Name",
    col_model: "Model",
    col_program: "Program",
    col_matrix: "Matrix",
    col_dist_x: "Center distance X",
    col_dist_y: "Center distance Y",
    col_modified: "Last Modified",
    col_status: "Status",
    col_actions: "Actions",
    filters_title: "Search Filters",
    filter_date_from: "Date From",
    filter_date_to: "Date To",
    filter_user: "User",
    opt_all_users: "All users",
    filter_model: "Model",
    opt_all_models: "All models",
    filter_shift: "Shift",
    opt_all_shifts: "All shifts",
    opt_shift_1: "Shift 1 (Morning)",
    opt_shift_2: "Shift 2 (Afternoon)",
    opt_shift_3: "Shift 3 (Night)",
    btn_filter: "Filter",
    btn_export: "Export to Excel (CSV)",
    stat_kpi_total: "TOTAL PRODUCED",
    stat_kpi_ok: "TOTAL OK PIECES",
    stat_kpi_nok: "TOTAL NOK PIECES",
    stat_kpi_avg_login: "AVG LOGIN → 1st SEQ.",
    stat_kpi_avg_session: "AVG SESSION TIME",
    stat_kpi_sub_session: "Full shift logs",
    col_h_date: "Date",
    col_h_user: "User",
    col_h_login: "Login Time",
    col_h_first_seq: "1st Sequence",
    col_h_delta: "Delta Login-1st Seq",
    col_h_model: "Model",
    col_h_program: "Prog",
    col_h_total: "Total",
    col_h_ok: "OK",
    col_h_nok: "NOK",
    col_h_quality: "% Quality",
    col_h_logout: "Logout Time",
    col_h_duration: "Shift Duration",
    usr_kpi_active: "Active Users:",
    usr_kpi_operators: "Operators:",
    usr_kpi_admins: "Administrators:",
    btn_new_user: "NEW USER",
    col_u_id: "Employee ID",
    col_u_name: "Full Name",
    col_u_user: "Username",
    col_u_role: "Role",
    col_u_status: "Status",
    col_u_access: "Last Access",
    col_u_actions: "Actions",
    pf1_title: "Recipe Configuration",
    pf1_subtitle: "Model / matrix / axis positioning (JOG Mode)",
    pf1_recipe_info: "General Information",
    pf1_lbl_name: "Recipe Name",
    pf1_lbl_model: "Model",
    pf1_lbl_program: "Program Code",
    pf1_lbl_matrix_cols: "Matrix X (Col)",
    pf1_lbl_matrix_rows: "Matrix Y (Rows)",
    pf1_axis_x: "AXIS X - Centers Spacing (Horizontal)",
    pf1_lbl_jog_step: "JOG Step",
    pf1_axis_y: "AXIS Y - Centers Spacing (Vertical)",
    btn_ref_up: "UP",
    btn_ref_down: "DOWN",
    pf1_summary_title: "Active Parameters Summary:",
    sum_lbl_prog: "Program:",
    sum_lbl_matrix: "Matrix:",
    sum_lbl_x: "Center distance X:",
    sum_lbl_y: "Center distance Y:",
    sum_lbl_modified: "Last Modif:",
    sum_lbl_user: "Modified by:",
    btn_cancel: "Cancel",
    btn_save_config: "SAVE RECIPE CONFIG",
    new_user_title: "Create New User",
    new_user_subtitle: "Register credentials and assign role access",
    lbl_nu_name: "Full Name",
    lbl_nu_emp_num: "Employee ID (No.)",
    lbl_nu_username: "Username",
    lbl_nu_role: "System Role",
    opt_nu_oper: "Operator",
    opt_nu_admin: "Administrator",
    lbl_nu_pass: "Password",
    lbl_nu_pass_conf: "Confirm Password",
    lbl_nu_status: "Account State:",
    status_active_txt: "Active",
    status_inactive_txt: "Inactive",
    btn_create_user: "CREATE USER",
    detail_user_title: "Operator Productivity",
    detail_user_subtitle: "Employee performance metrics and station history",
    det_lbl_total_shifts: "Registered Shifts",
    det_lbl_total_prod: "Produced Pieces",
    det_lbl_ok: "OK Pieces",
    det_lbl_nok: "NOK Pieces",
    det_lbl_efficiency: "Avg Quality",
    det_lbl_delta: "Avg Login → 1st Seq",
    det_last_shift_title: "Last Shift Performance",
    det_last_date: "Date:",
    det_last_login: "Login / Logout Time:",
    det_last_duration: "Shift Duration:",
    det_last_pieces: "Production (OK / NOK):",
    btn_close: "Close",
    admin_users_title: "User Management",
    admin_users_subtitle: "System operators and administrators management.",
    admin_stats_title: "Production Statistics",
    admin_stats_subtitle: "Station performance history, pieces and duration logs.",
    toast_login_success: "Login successful. Welcome!",
    toast_login_fail: "Invalid username or password.",
    toast_logout: "Signed out successfully.",
    toast_zero_set: "System coordinates successfully set to Zero.",
    toast_axis_up: "Axis Z moving up to safe clearance...",
    toast_axis_down: "Axis Z moving down to contact position...",
    toast_save_recipe: "Recipe configurations saved successfully.",
    toast_create_user: "User profile created successfully.",
    toast_pass_mismatch: "Passwords do not match.",
    toast_cycle_started: "Simulating hardware cycle active on fixture.",
    toast_cycle_stopped: "Inspection cycle stopped manually.",
    
    // Mockup added
    process_info_title: "Process Information",
    piece_image_title: "Piece Image",
    piece_info_title: "Piece Information",
    btn_home: "Home button",
    btn_emergency: "EMERGENCY STOP",
    btn_start: "START",
    toast_emergency_active: "EMERGENCY STOP ACTIVE!",
    toast_emergency_inactive: "Emergency stop deactivated. System restored.",
    toast_home_active: "Axes returning to HOME position... Positioned successfully.",
    toast_setpoint: "Piece setpoint selected.",
    toast_return_zero: "Axes returning to machine Zero coordinates.",
    btn_toggle_settings: "Settings",
    recipe_select_label: "Active Recipe:",
    nav_settings: "Global Settings",
    admin_settings_title: "HMI Configuration",
    admin_settings_subtitle: "Global station settings, downtime limits and parameters.",
    toast_settings_saved: "Settings saved successfully.",
    toast_delete_user_success: "User deleted successfully.",
    downtime_block_title: "SYSTEM STOPPED - DOWNTIME JUSTIFICATION",
    downtime_block_desc: "The idle time has exceeded the allowed limit. Select a reason to continue.",
    btn_justify: "Justify & Resume",
    hourly_block_title: "SYSTEM LOCKED - END OF HOUR RECORD",
    hourly_block_desc: "Please enter the physical count of OK and NOK pieces for the last hour to continue.",
    btn_register: "Register & Resume"
  }
};

// SVG de Gota Vectorial para reutilización
const teardropSVGHtml = `
<svg viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
  <path class="teardrop-path" d="M12,2 C12,2 22,12 22,18 C22,23.5 17.5,28 12,28 C6.5,28 2,23.5 2,18 C2,12 12,2 12,2 Z"></path>
</svg>
`;

// Coordenadas iniciales para las 15 posiciones en base a matriz 3x5
const initialNestsData = Array.from({ length: 15 }, (_, i) => {
  const row = Math.floor(i / 3);
  const col = i % 3;
  return {
    name: `Nest ${(i + 1).toString().padStart(2, '0')}`,
    x: 10.0 + col * 42.0,
    y: 10.0 + row * 36.0
  };
});

// 2. Estado Global de la Aplicación (en memoria)
const state = {
  currentLanguage: 'es',
  currentUser: null,
  
  // Datos Operador
  sessionSeconds: 8072, // Simulación inicial: 02:14:32 (2h * 3600 + 14m * 60 + 32s)
  sessionTimerInterval: null,
  cycleActive: false,
  cycleInterval: null,
  currentCycleNest: 0,
  
  // Gotas del fixture. Por mockup la gotita 05 (index 4) es NOK de inicio y tiene la cruz
  piecesState: ['pending', 'pending', 'pending', 'pending', 'nok', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending', 'pending'],
  selectedNest: 0,
  nestCoordinates: JSON.parse(JSON.stringify(initialNestsData)), // Coordenadas mutables por JOG
  emergencyActive: false,
  
  // KPIs de la jornada actual del Operador
  opKPIs: {
    total: 128,
    ok: 124,
    nok: 4,
    quality: '96.9%'
  },
  
  // Base de Datos Ficticia en Memoria (Recetas/Programas)
  programsList: [
    { name: "Botón A", model: "KSL-001", program: "P01", matrix: "3×5", x: 42.00, y: 36.00, modified: "25/08/2026 10:42", user: "Admin", status: "Activo", imageUrl: "" },
    { name: "Carcasa B", model: "KSL-002", program: "P02", matrix: "3×5", x: 45.00, y: 38.00, modified: "24/08/2026 14:15", user: "Admin", status: "Activo", imageUrl: "" },
    { name: "Selector C", model: "KSL-003", program: "P03", matrix: "2×4", x: 30.00, y: 28.00, modified: "22/08/2026 11:30", user: "Admin", status: "Inactivo", imageUrl: "" }
  ],
  editingRecipeIndex: -1,
  editingRecipeImageUrl: "",

  // Base de Datos de Usuarios
  usersList: [
    { empNum: "KOSTAL-0001", name: "Carlos Hernández", username: "carlos.h", role: "ADMIN", status: "Activo", lastAccess: "26/08/2026 09:22" },
    { empNum: "KOSTAL-0842", name: "Juan Pérez", username: "juan.p", role: "OPERADOR", status: "Activo", lastAccess: "26/08/2026 07:31" },
    { empNum: "KOSTAL-0913", name: "María López", username: "maria.l", role: "OPERADOR", status: "Activo", lastAccess: "25/08/2026 07:30" },
    { empNum: "KOSTAL-1052", name: "Pedro Picapiedra", username: "pedro.p", role: "OPERADOR", status: "Inactivo", lastAccess: "18/08/2026 15:42" }
  ],

  // Base de Datos de Histórico de Estadísticas (8 registros ficticios)
  statsList: [
    { date: "25/08/2026", user: "Juan Pérez", login: "07:31:24", firstSeq: "07:36:51", delta: "00:05:27", model: "KSL-001", program: "P01", total: 328, ok: 321, nok: 7, quality: "97.8%", logout: "16:02:18", duration: "08:30:54" },
    { date: "25/08/2026", user: "María López", login: "07:28:10", firstSeq: "07:31:45", delta: "00:03:35", model: "KSL-001", program: "P01", total: 342, ok: 339, nok: 3, quality: "99.1%", logout: "15:58:42", duration: "08:30:32" },
    { date: "24/08/2026", user: "Juan Pérez", login: "07:30:15", firstSeq: "07:34:02", delta: "00:03:47", model: "KSL-001", program: "P01", total: 310, ok: 302, nok: 8, quality: "97.4%", logout: "16:01:05", duration: "08:30:50" },
    { date: "24/08/2026", user: "María López", login: "07:29:45", firstSeq: "07:35:10", delta: "00:05:25", model: "KSL-002", program: "P02", total: 290, ok: 285, nok: 5, quality: "98.2%", logout: "15:59:12", duration: "08:29:27" },
    { date: "23/08/2026", user: "Juan Pérez", login: "07:32:00", firstSeq: "07:37:12", delta: "00:05:12", model: "KSL-002", program: "P02", total: 305, ok: 298, nok: 7, quality: "97.7%", logout: "16:00:20", duration: "08:28:20" },
    { date: "22/08/2026", user: "María López", login: "07:30:00", firstSeq: "07:33:18", delta: "00:03:18", model: "KSL-001", program: "P01", total: 330, ok: 326, nok: 4, quality: "98.7%", logout: "16:02:45", duration: "08:32:45" },
    { date: "21/08/2026", user: "Juan Pérez", login: "07:31:02", firstSeq: "07:36:18", delta: "00:05:16", model: "KSL-001", program: "P01", total: 322, ok: 315, nok: 7, quality: "97.8%", logout: "16:00:15", duration: "08:29:13" },
    { date: "20/08/2026", user: "María López", login: "07:29:10", firstSeq: "07:32:01", delta: "00:02:51", model: "KSL-001", program: "P01", total: 345, ok: 340, nok: 5, quality: "98.5%", logout: "15:57:48", duration: "08:28:38" }
  ],
  activeRecipeIndex: 0,
  settings: {
    projectName: "KOSTAL HMI Dashboard Prototipo",
    stationCode: "EST-KOSTAL-04",
    stationDesc: "Línea de Ensamblado & Calidad KOSTAL",
    goodPieceParam: "0.5 mm",
    maxIdleSeconds: 15, // 15 segundos para demostración rápida, configurable
    hourlyEfficiencyMin: 15,
    pieceImageUrl: ""
  },
  idleSeconds: 0,
  downtimeLog: [],
  hourlyLog: [],
  hourlyPiecesOK: 0,
  hourlyPiecesNOK: 0,
  lastHourlyCheckSeconds: 0
};

// 3. Inicialización e Inclusión de Iconos Lucide
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  console.log("DEBUG: initApp start");
  // Traducir interfaz por primera vez
  translateUI();
  console.log("DEBUG: translateUI done");
  
  // Renderizar Tablas y Matrices iniciales
  renderProgramsTable();
  console.log("DEBUG: renderProgramsTable done");
  renderStatsTable();
  console.log("DEBUG: renderStatsTable done");
  renderUsersTable();
  console.log("DEBUG: renderUsersTable done");
  
  // Inicializar Recetas y Nidos
  initRecipeSelector();
  console.log("DEBUG: initRecipeSelector done");
  populateLoginDropdown();
  console.log("DEBUG: populateLoginDropdown done");
  selectRecipe(0);
  console.log("DEBUG: selectRecipe done");
  
  // Configurar Clocks del Sistema
  setInterval(updateClocks, 1000);
  updateClocks();
  console.log("DEBUG: updateClocks done");
  
  // Registrar Listeners
  setupEventListeners();
  console.log("DEBUG: setupEventListeners done");
  
  // Iniciar Lucide
  lucide.createIcons();
  console.log("DEBUG: lucide.createIcons done");
}

function generateNestsForRecipe(recipe) {
  const parts = recipe.matrix.split('×');
  const cols = parseInt(parts[0]) || 3;
  const rows = parseInt(parts[1]) || 5;
  const spacingX = recipe.x || 42.0;
  const spacingY = recipe.y || 36.0;
  const total = cols * rows;
  
  return Array.from({ length: total }, (_, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    return {
      name: `Nest ${(i + 1).toString().padStart(2, '0')}`,
      x: 10.0 + col * spacingX,
      y: 10.0 + row * spacingY
    };
  });
}

function initRecipeSelector() {
  const selectEl = document.getElementById("op-recipe-select");
  if (!selectEl) return;
  
  selectEl.innerHTML = "";
  state.programsList.forEach((recipe, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = recipe.name;
    selectEl.appendChild(option);
  });
  
  selectEl.addEventListener("change", (e) => {
    selectRecipe(parseInt(e.target.value));
  });
}

function selectRecipe(index) {
  state.activeRecipeIndex = index;
  const recipe = state.programsList[index];
  if (!recipe) return;
  
  // Actualizar select si es necesario
  const selectEl = document.getElementById("op-recipe-select");
  if (selectEl && selectEl.value != index) {
    selectEl.value = index;
  }
  
  // Actualizar etiquetas en la pantalla
  const modelEl = document.getElementById("op-active-model");
  const programEl = document.getElementById("op-active-program");
  const matrixEl = document.getElementById("op-active-matrix");
  const badgeEl = document.getElementById("op-active-recipe-badge");
  const schedEl = document.getElementById("op-scheduled-pieces");
  
  if (modelEl) modelEl.textContent = recipe.model;
  if (programEl) programEl.textContent = recipe.program;
  if (matrixEl) matrixEl.textContent = recipe.matrix;
  if (badgeEl) badgeEl.textContent = `${recipe.model} - ${recipe.program}`;
  
  // Calcular coordenadas
  state.nestCoordinates = generateNestsForRecipe(recipe);
  
  // Configurar piezas
  const totalNests = state.nestCoordinates.length;
  if (schedEl) schedEl.textContent = totalNests;
  
  state.piecesState = Array(totalNests).fill('pending');
  // Colocar una gotita NOK por demostración inicial
  if (totalNests > 4) {
    state.piecesState[4] = 'nok';
  }
  
  state.selectedNest = 0;
  
  // Poblar selector de nidos
  const nestSelectEl = document.getElementById("op-nest-select");
  if (nestSelectEl) {
    nestSelectEl.innerHTML = "";
    for (let i = 0; i < totalNests; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `Nest ${(i + 1).toString().padStart(2, '0')}`;
      nestSelectEl.appendChild(option);
    }
    nestSelectEl.value = 0;
  }
  
  renderPiecesGrid();
  updateSelectedPieceInfo();
  recalculateStatsFromGrid();
}

// 4. Clocks del Sistema (Operador y Admin)
function updateClocks() {
  const now = new Date();
  const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
  
  const formattedTime = now.toTimeString().split(' ')[0];
  const formattedDate = now.toLocaleDateString('es-ES', optionsDate);

  // Reloj Operador
  const opTimeEl = document.getElementById("op-time");
  const opDateEl = document.getElementById("op-date");
  if (opTimeEl) opTimeEl.textContent = formattedTime;
  if (opDateEl) opDateEl.textContent = formattedDate;

  // Reloj Admin
  const adminTimeEl = document.getElementById("admin-time");
  const adminDateEl = document.getElementById("admin-date");
  if (adminTimeEl) adminTimeEl.textContent = formattedTime;
  if (adminDateEl) adminDateEl.textContent = formattedDate;
}

// 5. Enrutamiento y Gestión de Pantallas (Login / Operador / Admin)
function showScreen(screenId) {
  // Desactivar todas las pantallas
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  
  // Activar la pantalla solicitada
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add("active");
  }

  // Lógica contextual al entrar a pantallas
  if (screenId === "screen-operator") {
    startSessionTimer();
  } else {
    stopSessionTimer();
    stopInspectionCycle();
  }
}

// 6. Temporizador de jornada del Operador
function startSessionTimer() {
  stopSessionTimer(); // Asegurar limpiar el previo
  const timerEl = document.getElementById("op-session-timer");
  
  state.sessionTimerInterval = setInterval(() => {
    state.sessionSeconds++;
    
    // 1. Formatear HH:MM:SS
    const hrs = Math.floor(state.sessionSeconds / 3600);
    const mins = Math.floor((state.sessionSeconds % 3600) / 60);
    const secs = state.sessionSeconds % 60;
    
    const formatted = [
      hrs.toString().padStart(2, '0'),
      mins.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ].join(':');
    
    if (timerEl) timerEl.textContent = formatted;

    // 2. Monitorear e Incrementar Inactividad para Tiempo Muerto
    const hourlyModal = document.getElementById("modal-hourly-count");
    const downtimeModal = document.getElementById("modal-downtime-justification");
    const isHourlyActive = hourlyModal && hourlyModal.classList.contains("active");
    const isDowntimeActive = downtimeModal && downtimeModal.classList.contains("active");

    if (!state.cycleActive && !state.emergencyActive && !isHourlyActive && !isDowntimeActive && state.currentUser && state.currentUser.role === 'OPERADOR') {
      state.idleSeconds++;
      if (state.idleSeconds >= state.settings.maxIdleSeconds) {
        triggerDowntimeJustification();
      }
    } else {
      // Si está en ciclo, reset de inactividad
      if (state.cycleActive) {
        state.idleSeconds = 0;
      }
    }

    // 3. Monitorear Bloqueo de Conteo Horario (cada 3600 segundos = 1 hora)
    if (state.sessionSeconds > 0 && (state.sessionSeconds - state.lastHourlyCheckSeconds) >= 3600) {
      triggerHourlyCheck();
    }

    // 4. Actualizar KPI de tiempo muerto en tiempo real
    updateDowntimeKPI();
  }, 1000);
}

function stopSessionTimer() {
  if (state.sessionTimerInterval) {
    clearInterval(state.sessionTimerInterval);
    state.sessionTimerInterval = null;
  }
}

// 7. Simulación de Ciclo de Inspección (INICIO / PARO)
function toggleInspectionCycle() {
  if (state.emergencyActive) {
    showToast(getTranslation('toast_emergency_active'), 'error');
    return;
  }
  
  if (state.cycleActive) {
    stopInspectionCycle();
    showToast(getTranslation('toast_cycle_stopped'), 'warning');
  } else {
    startInspectionCycle();
    showToast(getTranslation('toast_cycle_started'), 'success');
  }
}

function startInspectionCycle() {
  state.cycleActive = true;
  
  // Bloquear cambio de receta durante ciclo
  const recipeSelectLock = document.getElementById("op-recipe-select");
  if (recipeSelectLock) recipeSelectLock.disabled = true;
  
  // Actualizar Botón INICIO (Active class)
  const btnCycleStart = document.getElementById("btn-cycle-start");
  if (btnCycleStart) {
    btnCycleStart.classList.add("active-start");
    btnCycleStart.querySelector("span").textContent = state.currentLanguage === 'es' ? "PROCESANDO" : "RUNNING";
  }
  
  const totalPieces = state.piecesState.length;
  // Reiniciar matriz de piezas a "pendiente", excepto la gotita 05 que es NOK fija en el mockup
  state.piecesState = Array(totalPieces).fill('pending');
  if (totalPieces > 4) {
    state.piecesState[4] = 'nok'; // Gotita 05 rota
  }
  state.piecesState[0] = 'active'; // Iniciar primera como activa
  state.selectedNest = 0;
  state.currentCycleNest = 0;
  
  renderPiecesGrid();
  updateSelectedPieceInfo();
  updateOperatorProgress(0, totalPieces);

  // Reset inactividad cada vez que se inicia un ciclo
  state.idleSeconds = 0;

  // Intervalo de ciclo (Simulación de inspección física cada 1.2s)
  state.cycleInterval = setInterval(() => {
    const current = state.currentCycleNest;
    
    // La gotita 05 (índice 4) es NOK fija
    if (current === 4 && totalPieces > 4) {
      state.piecesState[current] = 'nok';
      state.opKPIs.nok++;
      state.opKPIs.total++;
      // Guardar piezas generadas
      state.hourlyPiecesNOK++;
    } else {
      // 95% OK para las demás
      const isOK = Math.random() > 0.05;
      state.piecesState[current] = isOK ? 'ok' : 'nok';
      
      state.opKPIs.total++;
      if (isOK) {
        state.opKPIs.ok++;
        state.hourlyPiecesOK++;
      } else {
        state.opKPIs.nok++;
        state.hourlyPiecesNOK++;
      }
    }
    
    // Recalcular calidad
    const qualPct = ((state.opKPIs.ok / state.opKPIs.total) * 100).toFixed(1);
    state.opKPIs.quality = qualPct + "%";
    updateKPIWidgets();

    // Siguiente pieza
    state.currentCycleNest++;
    const next = state.currentCycleNest;
    
    if (next < totalPieces) {
      // Activar siguiente gotita
      state.piecesState[next] = 'active';
      state.selectedNest = next;
      // Sincronizar el dropdown
      const nestSelect = document.getElementById("op-nest-select");
      if (nestSelect) nestSelect.value = next;

      updateOperatorProgress(next, totalPieces);
    } else {
      // Fin del ciclo
      clearInterval(state.cycleInterval);
      state.cycleInterval = null;
      state.cycleActive = false;
      
      updateOperatorProgress(totalPieces, totalPieces);
      if (btnCycleStart) {
        btnCycleStart.classList.remove("active-start");
        btnCycleStart.querySelector("span").textContent = getTranslation('btn_start');
      }
      // Desbloquear cambio de receta
      const recipeSelectUnlock = document.getElementById("op-recipe-select");
      if (recipeSelectUnlock) recipeSelectUnlock.disabled = false;
      showToast(getTranslation('status_finished'), 'success');
      // Reset inactividad al finalizar el ciclo
      state.idleSeconds = 0;
    }
    
    renderPiecesGrid();
    updateSelectedPieceInfo();
  }, 1200);
}

function stopInspectionCycle() {
  state.cycleActive = false;
  
  // Desbloquear cambio de receta
  const recipeSelectEnable = document.getElementById("op-recipe-select");
  if (recipeSelectEnable) recipeSelectEnable.disabled = false;
  
  if (state.cycleInterval) {
    clearInterval(state.cycleInterval);
    state.cycleInterval = null;
  }
  
  const btnCycleStart = document.getElementById("btn-cycle-start");
  if (btnCycleStart) {
    btnCycleStart.classList.remove("active-start");
    btnCycleStart.querySelector("span").textContent = getTranslation('btn_start');
  }
  
  // Gotitas activas a pendientes
  state.piecesState = state.piecesState.map(s => s === 'active' ? 'pending' : s);
  renderPiecesGrid();
  updateSelectedPieceInfo();
}

function handleEmergencyStop() {
  if (state.emergencyActive) {
    // Restaurar sistema
    state.emergencyActive = false;
    document.getElementById("btn-emergency-stop").classList.remove("active-stop");
    showToast(getTranslation('toast_emergency_inactive'), 'success');
  } else {
    // Disparar emergencia
    state.emergencyActive = true;
    stopInspectionCycle();
    document.getElementById("btn-emergency-stop").classList.add("active-stop");
    showToast(getTranslation('toast_emergency_active'), 'error');
  }
}

function updateOperatorProgress(completed, total) {
  document.getElementById("op-progress-text").textContent = `${completed.toString().padStart(2, '0')} / ${total.toString().padStart(2, '0')}`;
  document.getElementById("op-progress-bar").style.width = `${(completed / total) * 100}%`;
}

function updateKPIWidgets() {
  document.getElementById("op-kpi-total").textContent = state.opKPIs.total;
  document.getElementById("op-kpi-ok").textContent = state.opKPIs.ok;
  document.getElementById("op-kpi-nok").textContent = state.opKPIs.nok;
  
  const qualEl = document.getElementById("op-kpi-quality");
  qualEl.textContent = state.opKPIs.quality;
  
  const numQual = parseFloat(state.opKPIs.quality);
  if (numQual < 95.0) {
    qualEl.className = "info-value-sm font-mono text-red text-bold";
  } else {
    qualEl.className = "info-value-sm font-mono text-green text-bold";
  }
}

// 8. RENDERIZACIÓN DE COMPONENTES DINÁMICOS
// 8.1. Matriz de gotitas 3x5
function renderPiecesGrid() {
  const gridEl = document.getElementById("fixture-grid");
  if (!gridEl) return;
  
  gridEl.innerHTML = "";

  // Determinar columnas y filas basadas en la receta seleccionada
  const recipe = state.programsList[state.activeRecipeIndex];
  const parts = recipe.matrix.split('×');
  const cols = parseInt(parts[0]) || 3;
  const rows = parseInt(parts[1]) || 5;

  gridEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gridEl.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  
  const total = state.piecesState.length;
  
  for (let i = 0; i < total; i++) {
    const nestState = state.piecesState[i];
    const nestDiv = document.createElement("div");
    
    // Es activa si está en secuencia o si es la seleccionada por el operador
    const isActiveClass = (nestState === 'active' || i === state.selectedNest) ? 'nest-active' : '';
    nestDiv.className = `piece-nest-teardrop nest-${nestState} ${isActiveClass}`;
    nestDiv.dataset.index = i;
    
    const nestIdStr = (i + 1).toString().padStart(2, '0');
    
    // Imagen de la receta o Gotita SVG
    const recipeImg = state.programsList[state.activeRecipeIndex]?.imageUrl;
    let innerContent;
    if (recipeImg) {
      innerContent = `
        <span class="piece-id">${nestIdStr}</span>
        <img src="${recipeImg}" alt="Pieza" class="nest-piece-image">
      `;
    } else {
      innerContent = `
        <span class="piece-id">${nestIdStr}</span>
        ${teardropSVGHtml}
      `;
    }
    
    // Si es NOK, colocar cruz en medio (XX por mockup)
    if (nestState === 'nok') {
      innerContent += `<span class="nest-nok-overlay">XX</span>`;
    }
    
    nestDiv.innerHTML = innerContent;
    
    // Permitir clic interactivo para demostración
    nestDiv.addEventListener("click", () => {
      if (state.cycleActive) return; // Deshabilitado durante secuencia
      if (state.emergencyActive) return; // Deshabilitado en emergencia
      
      // Seleccionar nido
      state.selectedNest = i;
      
      // Sincronizar con el selector desplegable
      const nestSelect = document.getElementById("op-nest-select");
      if (nestSelect) {
        nestSelect.value = i;
      }
      
      // Ciclar estados de gotitas individualmente al hacer clic de nuevo
      const states = ['pending', 'active', 'ok', 'nok'];
      let currentIdx = states.indexOf(state.piecesState[i]);
      let nextIdx = (currentIdx + 1) % states.length;
      
      state.piecesState[i] = states[nextIdx];
      
      renderPiecesGrid();
      updateSelectedPieceInfo();
      recalculateStatsFromGrid();
    });
    
    gridEl.appendChild(nestDiv);
  }
}

function updateSelectedPieceInfo() {
  const idx = state.selectedNest;
  const data = state.nestCoordinates[idx];
  const nestState = state.piecesState[idx];
  
  // Dibujar imagen en la previsualización inferior
  const svgContainer = document.getElementById("op-piece-svg-container");
  const activeRecipe = state.programsList[state.activeRecipeIndex];
  const recipeImageUrl = activeRecipe?.imageUrl || "";
  
  if (svgContainer) {
    if (recipeImageUrl) {
      svgContainer.innerHTML = `<img src="${recipeImageUrl}" alt="Pieza" class="detail-piece-image">`;
    } else {
      svgContainer.innerHTML = teardropSVGHtml;
      const svgPath = svgContainer.querySelector(".teardrop-path");
      if (svgPath) {
        if (nestState === 'pending') svgPath.style.fill = "#E2E8F0";
        if (nestState === 'active') { svgPath.style.fill = "#FFFFFF"; svgPath.style.stroke = "var(--color-kostal-accent)"; }
        if (nestState === 'ok') { svgPath.style.fill = "var(--color-ok)"; svgPath.style.stroke = "var(--color-ok)"; }
        if (nestState === 'nok') { svgPath.style.fill = "var(--color-nok)"; svgPath.style.stroke = "var(--color-nok)"; }
      }
    }
  }
  
  // Actualizar coordenadas en panel JOG
  const jogXEl = document.getElementById("op-jog-coord-x");
  const jogYEl = document.getElementById("op-jog-coord-y");
  if (jogXEl) jogXEl.textContent = data.x.toFixed(2);
  if (jogYEl) jogYEl.textContent = data.y.toFixed(2);
  
  // Escribir datos
  const indexEl = document.getElementById("detail-piece-index");
  const xEl = document.getElementById("detail-piece-x");
  const yEl = document.getElementById("detail-piece-y");
  const statusEl = document.getElementById("detail-piece-status");
  
  if (indexEl) indexEl.textContent = `Nest ${(idx + 1).toString().padStart(2, '0')}`;
  if (xEl) xEl.textContent = `${data.x.toFixed(2)} mm`;
  if (yEl) yEl.textContent = `${data.y.toFixed(2)} mm`;
  
  if (statusEl) {
    const statusTextMap = {
      pending: state.currentLanguage === 'es' ? 'Pendiente' : 'Pending',
      active: state.currentLanguage === 'es' ? 'Activo' : 'Active',
      ok: 'OK',
      nok: 'NOK'
    };
    statusEl.textContent = statusTextMap[nestState] || nestState;
    
    // Clases semánticas
    if (nestState === 'ok') statusEl.className = "info-value-sm text-green";
    else if (nestState === 'nok') statusEl.className = "info-value-sm text-red";
    else if (nestState === 'active') statusEl.className = "info-value-sm text-highlight";
    else statusEl.className = "info-value-sm text-muted";
  }
}

function recalculateStatsFromGrid() {
  const okCount = state.piecesState.filter(s => s === 'ok').length;
  const nokCount = state.piecesState.filter(s => s === 'nok').length;
  const completed = okCount + nokCount;
  
  updateOperatorProgress(completed, state.piecesState.length);
}

// 8.2. Tabla de Programas de Producción (Recetas)
function renderProgramsTable() {
  const tbody = document.getElementById("programs-table-body");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  
  state.programsList.forEach((prog, index) => {
    const tr = document.createElement("tr");
    
    const badgeClass = prog.status === "Activo" ? "active" : "inactive";
    const statusText = prog.status === "Activo" ? getTranslation('status_active_txt') : getTranslation('status_inactive_txt');
    
    tr.innerHTML = `
      <td class="text-bold">${prog.name}</td>
      <td class="font-mono">${prog.model}</td>
      <td class="font-mono text-highlight">${prog.program}</td>
      <td class="font-mono">${prog.matrix}</td>
      <td class="font-mono">${prog.x.toFixed(2)} mm</td>
      <td class="font-mono">${prog.y.toFixed(2)} mm</td>
      <td>${prog.modified}</td>
      <td>
        <span class="badge-status ${badgeClass}">
          <span class="status-dot" style="background-color: ${prog.status === 'Activo' ? 'var(--color-ok)' : 'var(--text-muted)'}"></span>
          <span>${statusText}</span>
        </span>
      </td>
      <td class="text-center">
        <button type="button" class="btn-table-action-configure btn-config-recipe" data-index="${index}">
          <i data-lucide="sliders-horizontal" style="width: 14px; height: 14px;"></i>
          <span>${state.currentLanguage === 'es' ? 'Configurar' : 'Config'}</span>
        </button>
        <button type="button" class="btn-table-action btn-delete-recipe" data-index="${index}" title="${state.currentLanguage === 'es' ? 'Eliminar' : 'Delete'}" style="background-color: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.2); margin-left: 4px;">
          <i data-lucide="trash-2" style="width: 14px; height: 14px; color: var(--color-nok);"></i>
        </button>
      </td>
    `;
    
    tbody.appendChild(tr);
  });
  
  // Agregar listeners
  document.querySelectorAll(".btn-config-recipe").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.currentTarget.dataset.index);
      openPF1Modal(idx);
    });
  });
  
  document.querySelectorAll(".btn-delete-recipe").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.currentTarget.dataset.index);
      handleDeleteRecipe(idx);
    });
  });

  lucide.createIcons();
}

// 8.3. Tabla Histórica de Estadísticas
function renderStatsTable() {
  const tbody = document.getElementById("stats-table-body");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  
  state.statsList.forEach(row => {
    const tr = document.createElement("tr");
    
    const valQual = parseFloat(row.quality);
    const qualClass = valQual < 98.0 ? "text-red" : "text-green";
    
    tr.innerHTML = `
      <td class="font-mono">${row.date}</td>
      <td class="text-bold">${row.user}</td>
      <td class="font-mono">${row.login}</td>
      <td class="font-mono">${row.firstSeq}</td>
      <td class="font-mono text-purple">${row.delta}</td>
      <td class="font-mono">${row.model}</td>
      <td class="font-mono text-highlight">${row.program}</td>
      <td class="font-mono text-bold">${row.total}</td>
      <td class="font-mono text-green">${row.ok}</td>
      <td class="font-mono text-red">${row.nok}</td>
      <td class="font-mono ${qualClass} text-bold">${row.quality}</td>
      <td class="font-mono">${row.logout}</td>
      <td class="font-mono text-bold">${row.duration}</td>
    `;
    
    tbody.appendChild(tr);
  });
}

// 8.4. Tabla de Usuarios
function renderUsersTable() {
  const tbody = document.getElementById("users-table-body");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  
  state.usersList.forEach(usr => {
    const tr = document.createElement("tr");
    
    const badgeClass = usr.status === "Activo" ? "active" : "inactive";
    const badgeRole = usr.role === "ADMIN" ? "badge-admin" : "badge-operator";
    const statusText = usr.status === "Activo" ? getTranslation('status_active_txt') : getTranslation('status_inactive_txt');
    const roleText = usr.role === "ADMIN" ? getTranslation('role_admin') : getTranslation('role_operator');
    
    const showDeleteBtn = state.currentUser && state.currentUser.empNum !== usr.empNum;
    
    tr.innerHTML = `
      <td class="font-mono text-bold">${usr.empNum}</td>
      <td>${usr.name}</td>
      <td class="font-mono text-highlight">${usr.username}</td>
      <td><span class="user-role ${badgeRole}">${roleText}</span></td>
      <td>
        <span class="badge-status ${badgeClass}">
          <span class="status-dot" style="background-color: ${usr.status === 'Activo' ? 'var(--color-ok)' : 'var(--text-muted)'}"></span>
          <span>${statusText}</span>
        </span>
      </td>
      <td>${usr.lastAccess}</td>
      <td class="text-center">
        <button type="button" class="btn-table-action btn-view-user" data-id="${usr.empNum}" title="Ver detalles">
          <i data-lucide="eye" style="width: 14px; height: 14px;"></i>
        </button>
        ${showDeleteBtn ? `
        <button type="button" class="btn-table-action btn-delete-user" data-id="${usr.empNum}" title="Eliminar" style="background-color: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.2); margin-left: 4px;">
          <i data-lucide="trash-2" style="width: 14px; height: 14px; color: var(--color-nok);"></i>
        </button>
        ` : ''}
      </td>
    `;
    
    tr.addEventListener("click", (e) => {
      if (!e.target.closest("button")) {
        openUserDetailModal(usr.empNum);
      }
    });
    
    tbody.appendChild(tr);
  });
  
  document.querySelectorAll(".btn-view-user").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const empId = e.currentTarget.dataset.id;
      openUserDetailModal(empId);
    });
  });

  document.querySelectorAll(".btn-delete-user").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const empId = e.currentTarget.dataset.id;
      handleDeleteUser(empId);
    });
  });

  updateUserTabKPIs();
  lucide.createIcons();
}

function handleDeleteUser(empId) {
  const usr = state.usersList.find(u => u.empNum === empId);
  if (!usr) return;
  
  const confirmMsg = state.currentLanguage === 'es' ? 
    `¿Está seguro de que desea eliminar al usuario ${usr.name} (${usr.empNum})?` : 
    `Are you sure you want to delete user ${usr.name} (${usr.empNum})?`;
    
  if (confirm(confirmMsg)) {
    state.usersList = state.usersList.filter(u => u.empNum !== empId);
    renderUsersTable();
    populateLoginDropdown();
    showToast(state.currentLanguage === 'es' ? "Usuario eliminado correctamente." : "User deleted successfully.", "success");
  }
}

function updateUserTabKPIs() {
  const activeCount = state.usersList.filter(u => u.status === 'Activo').length;
  const operatorCount = state.usersList.filter(u => u.role === 'OPERADOR').length;
  const adminCount = state.usersList.filter(u => u.role === 'ADMIN').length;
  
  const activeEl = document.getElementById("usr-kpi-active");
  const operEl = document.getElementById("usr-kpi-operators");
  const adminEl = document.getElementById("usr-kpi-admins");
  
  if (activeEl) activeEl.textContent = activeCount;
  if (operEl) operEl.textContent = operatorCount;
  if (adminEl) adminEl.textContent = adminCount;
}

// 9. EVENTOS Y CONTROLADORES
function setupEventListeners() {
  // 9.1. LOGIN ACCIONES
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
  }
  
  // Accesos rápidos de simulación
  document.getElementById("btn-demo-operator").addEventListener("click", () => {
    loginAsUser("KOSTAL-0842"); // Juan Pérez
  });
  
  document.getElementById("btn-demo-admin").addEventListener("click", () => {
    loginAsUser("KOSTAL-0001"); // Carlos Hernández
  });
  
  // 9.2. LOGOUTS
  document.getElementById("btn-logout-op-full").addEventListener("click", handleLogout);
  document.getElementById("btn-logout-admin").addEventListener("click", handleLogout);
  
  // 9.3. IDIOMAS SELECTORES
  document.querySelectorAll(".btn-lang").forEach(btn => {
    btn.addEventListener("click", (e) => {
      setLanguage(e.target.dataset.lang);
    });
  });
  
  document.querySelectorAll(".btn-lang-admin").forEach(btn => {
    btn.addEventListener("click", (e) => {
      setLanguage(e.target.dataset.lang);
    });
  });
  
  // 9.4. INTERACCIÓN OPERADOR
  const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");
  if (btnToggleSidebar) {
    btnToggleSidebar.addEventListener("click", () => {
      const sidebar = document.querySelector(".op-col-right");
      if (sidebar) {
        sidebar.classList.toggle("collapsed");
        btnToggleSidebar.classList.toggle("active", !sidebar.classList.contains("collapsed"));
      }
    });
  }

  document.getElementById("btn-cycle-start").addEventListener("click", toggleInspectionCycle);
  document.getElementById("btn-emergency-stop").addEventListener("click", handleEmergencyStop);

  const nestSelectEl = document.getElementById("op-nest-select");
  if (nestSelectEl) {
    nestSelectEl.addEventListener("change", (e) => {
      state.selectedNest = parseInt(e.target.value);
      renderPiecesGrid();
      updateSelectedPieceInfo();
    });
  }
  
  // Alternar al Panel Administrativo
  document.getElementById("btn-go-to-admin").addEventListener("click", () => {
    showScreen("screen-admin");
  });
  
  // Regresar de Admin a la Máquina HMI
  document.getElementById("btn-admin-return-machine").addEventListener("click", () => {
    showScreen("screen-operator");
  });
  
  // 9.5. NAVEGACIÓN ADMIN TABS
  document.querySelectorAll(".nav-item:not(#btn-admin-return-machine)").forEach(item => {
    item.addEventListener("click", (e) => {
      const tabId = e.currentTarget.dataset.tab;
      
      document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
      e.currentTarget.classList.add("active");
      
      document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
      const targetTab = document.getElementById(tabId);
      if (targetTab) targetTab.classList.add("active");
      
      updateAdminHeader(tabId);
      if (tabId === "tab-settings") {
        populateSettingsForm();
        renderDowntimeRecordsTable();
      }
      if (tabId === "tab-users") {
        renderUsersTable();
      }
    });
  });
  
  // 9.6. CONTROLES JOG EN LA PANTALLA PRINCIPAL
  document.getElementById("btn-op-jog-up").addEventListener("click", () => handleOpJog('y', 1));
  document.getElementById("btn-op-jog-down").addEventListener("click", () => handleOpJog('y', -1));
  document.getElementById("btn-op-jog-left").addEventListener("click", () => handleOpJog('x', -1));
  document.getElementById("btn-op-jog-right").addEventListener("click", () => handleOpJog('x', 1));

  // Botones Referencia Pantalla Principal
  document.getElementById("btn-op-home").addEventListener("click", () => {
    showToast(getTranslation('toast_home_active'), 'success');
  });
  document.getElementById("btn-op-setpoint").addEventListener("click", () => {
    showToast(getTranslation('toast_setpoint'), 'success');
  });
  document.getElementById("btn-op-return-zero").addEventListener("click", () => {
    const idx = state.selectedNest;
    state.nestCoordinates[idx].x = 0;
    state.nestCoordinates[idx].y = 0;
    updateSelectedPieceInfo();
    showToast(getTranslation('toast_return_zero'), 'warning');
  });

  // 9.7. MODALES - PF1 (JOG Modal en Recetas Admin)
  document.getElementById("btn-close-pf1").addEventListener("click", closeModals);
  document.getElementById("btn-cancel-pf1").addEventListener("click", closeModals);
  document.getElementById("btn-save-pf1").addEventListener("click", handleSaveRecipe);
  
  document.getElementById("btn-jog-x-dec").addEventListener("click", () => adjustJogValue('x', -1));
  document.getElementById("btn-jog-x-inc").addEventListener("click", () => adjustJogValue('x', 1));
  document.getElementById("btn-jog-y-dec").addEventListener("click", () => adjustJogValue('y', -1));
  document.getElementById("btn-jog-y-inc").addEventListener("click", () => adjustJogValue('y', 1));

  document.getElementById("btn-ref-zero").addEventListener("click", () => showToast(getTranslation('toast_zero_set'), 'success'));
  document.getElementById("btn-ref-up").addEventListener("click", () => showToast(getTranslation('toast_axis_up'), 'warning'));
  document.getElementById("btn-ref-down").addEventListener("click", () => showToast(getTranslation('toast_axis_down'), 'warning'));

  // NUEVA RECETA ACCIÓN
  const btnNewRecipe = document.getElementById("btn-new-program");
  if (btnNewRecipe) {
    btnNewRecipe.addEventListener("click", () => {
      openPF1Modal(-1);
    });
  }
  
  // 9.8. MODALES - NUEVO USUARIO
  document.getElementById("btn-new-user").addEventListener("click", openNewUserModal);
  document.getElementById("btn-close-new-user").addEventListener("click", closeModals);
  document.getElementById("btn-cancel-new-user").addEventListener("click", closeModals);
  document.getElementById("new-user-form").addEventListener("submit", handleCreateUser);
  
  const statusToggle = document.getElementById("nu-status-toggle");
  if (statusToggle) {
    statusToggle.addEventListener("change", (e) => {
      const label = document.getElementById("nu-status-label");
      if (e.target.checked) {
        label.textContent = getTranslation('status_active_txt');
        label.className = "toggle-text text-green";
      } else {
        label.textContent = getTranslation('status_inactive_txt');
        label.className = "toggle-text text-muted";
      }
    });
  }

  // 9.9. MODALES - DETALLE USUARIO
  document.getElementById("btn-close-user-detail").addEventListener("click", closeModals);
  document.getElementById("btn-close-detail-modal").addEventListener("click", closeModals);
  
  // 9.10. FILTRAR ESTADÍSTICAS Y EXPORTAR EXCEL
  document.getElementById("btn-filter-stats").addEventListener("click", handleFilterStats);
  document.getElementById("btn-export-excel").addEventListener("click", handleExportStats);

  // 9.11b. FILE PICKER PARA IMAGEN DE RECETA (PF1)
  const pf1FileInput = document.getElementById("pf1-image-file");
  if (pf1FileInput) {
    pf1FileInput.addEventListener("change", handleRecipeImageSelect);
  }

  // 9.11. FORMULARIOS DE BLOQUEO HORARIO Y TIEMPO MUERTO
  const hourlyForm = document.getElementById("hourly-count-form");
  if (hourlyForm) {
    hourlyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleHourlySubmit();
    });
  }

  const downtimeForm = document.getElementById("downtime-justification-form");
  if (downtimeForm) {
    downtimeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleDowntimeSubmit();
    });
  }

  const btnTriggerHourly = document.getElementById("btn-trigger-hourly");
  if (btnTriggerHourly) {
    btnTriggerHourly.addEventListener("click", () => {
      triggerHourlyCheck();
    });
  }

  const settingsForm = document.getElementById("global-settings-form");
  if (settingsForm) {
    settingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSettingsSubmit();
    });
  }
}

// ==========================================================================
// CONFIGURACIÓN GLOBAL (SETTINGS)
// ==========================================================================

function populateSettingsForm() {
  const pName = document.getElementById("settings-project-name");
  const sCode = document.getElementById("settings-station-code");
  const sDesc = document.getElementById("settings-station-desc");
  const gParam = document.getElementById("settings-good-piece-param");
  const mIdle = document.getElementById("settings-max-idle");
  const hMin = document.getElementById("settings-hourly-min");
  
  if (pName) pName.value = state.settings.projectName;
  if (sCode) sCode.value = state.settings.stationCode;
  if (sDesc) sDesc.value = state.settings.stationDesc;
  if (gParam) gParam.value = state.settings.goodPieceParam;
  if (mIdle) mIdle.value = state.settings.maxIdleSeconds;
  if (hMin) hMin.value = state.settings.hourlyEfficiencyMin;
}

function handleSettingsSubmit() {
  const pName = document.getElementById("settings-project-name").value.trim();
  const sCode = document.getElementById("settings-station-code").value.trim();
  const sDesc = document.getElementById("settings-station-desc").value.trim();
  const gParam = document.getElementById("settings-good-piece-param").value.trim();
  const mIdle = parseInt(document.getElementById("settings-max-idle").value) || 15;
  const hMin = parseInt(document.getElementById("settings-hourly-min").value) || 15;
  
  // Guardar en state
  state.settings.projectName = pName;
  state.settings.stationCode = sCode;
  state.settings.stationDesc = sDesc;
  state.settings.goodPieceParam = gParam;
  state.settings.maxIdleSeconds = mIdle;
  state.settings.hourlyEfficiencyMin = hMin;
  
  // Actualizar UI
  document.title = pName;
  
  const loginTitleEl = document.getElementById("login-system-title");
  if (loginTitleEl) loginTitleEl.textContent = pName;
  
  const loginStationDescEl = document.getElementById("login-station-desc");
  if (loginStationDescEl) loginStationDescEl.textContent = sDesc;
  
  const opStationTagEl = document.getElementById("op-station-tag");
  if (opStationTagEl) opStationTagEl.textContent = sCode;
  
  showToast(getTranslation('toast_settings_saved'), "success");
}

// ==========================================================================
// FUNCIONES DE BLOQUEO DE PANTALLA (CONTEO HORARIO Y TIEMPOS MUERTOS)
// ==========================================================================

function triggerHourlyCheck() {
  if (state.cycleActive) {
    stopInspectionCycle();
  }
  
  const startSecs = state.lastHourlyCheckSeconds;
  const endSecs = state.sessionSeconds;
  
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const timeRangeEl = document.getElementById("hourly-time-range");
  if (timeRangeEl) {
    timeRangeEl.textContent = `${formatTime(startSecs)} - ${formatTime(endSecs)}`;
  }
  
  const paramEl = document.getElementById("hourly-quality-param");
  if (paramEl) {
    paramEl.textContent = state.settings.goodPieceParam;
  }
  
  // Colocar conteos de sistema como valores por defecto
  const okInput = document.getElementById("hourly-ok-input");
  const nokInput = document.getElementById("hourly-nok-input");
  if (okInput) okInput.value = state.hourlyPiecesOK;
  if (nokInput) nokInput.value = state.hourlyPiecesNOK;
  
  const modal = document.getElementById("modal-hourly-count");
  if (modal) {
    modal.classList.add("active");
  }
}

function handleHourlySubmit() {
  const okVal = parseInt(document.getElementById("hourly-ok-input").value) || 0;
  const nokVal = parseInt(document.getElementById("hourly-nok-input").value) || 0;
  
  const startSecs = state.lastHourlyCheckSeconds;
  const endSecs = state.sessionSeconds;
  
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const timeRangeStr = `${formatTime(startSecs)} - ${formatTime(endSecs)}`;
  
  state.hourlyLog.push({
    hourIndex: state.hourlyLog.length + 1,
    timeRange: timeRangeStr,
    paramUsed: state.settings.goodPieceParam,
    okRegistered: okVal,
    nokRegistered: nokVal,
    total: okVal + nokVal,
    quality: ((okVal / (okVal + nokVal || 1)) * 100).toFixed(1) + "%",
    timestamp: new Date().toLocaleTimeString()
  });
  
  state.hourlyPiecesOK = 0;
  state.hourlyPiecesNOK = 0;
  state.lastHourlyCheckSeconds = state.sessionSeconds;
  
  const modal = document.getElementById("modal-hourly-count");
  if (modal) {
    modal.classList.remove("active");
  }
  
  showToast("Registro de conteo horario guardado con éxito.", "success");
  renderHourlyRecordsTable();
}

function renderHourlyRecordsTable() {
  const tbody = document.getElementById("hourly-records-table-body");
  if (!tbody) return;
  
  if (state.hourlyLog.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center text-muted">No hay registros horarios aún. Presione el botón 'Fin Hora' para simularlo.</td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = "";
  state.hourlyLog.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="font-mono text-bold">Hora ${row.hourIndex}</td>
      <td class="font-mono">${row.timeRange}</td>
      <td class="font-mono text-highlight">${row.paramUsed}</td>
      <td class="font-mono text-green">${row.okRegistered}</td>
      <td class="font-mono text-red">${row.nokRegistered}</td>
      <td class="font-mono text-bold">${row.total}</td>
      <td class="font-mono text-bold text-green">${row.quality}</td>
      <td>${row.timestamp}</td>
    `;
    tbody.appendChild(tr);
  });
}

function updateDowntimeKPI() {
  const justifiedDowntime = state.downtimeLog.reduce((sum, item) => sum + item.durationSeconds, 0);
  const currentDowntime = state.idleSeconds;
  const totalDowntime = justifiedDowntime + currentDowntime;
  
  const pct = ((totalDowntime / Math.max(state.sessionSeconds, 1)) * 100).toFixed(1);
  
  const kpiEl = document.getElementById("op-kpi-downtime");
  if (kpiEl) {
    kpiEl.textContent = `${pct}%`;
  }
}

function triggerDowntimeJustification() {
  if (state.cycleActive) {
    stopInspectionCycle();
  }
  
  const secondsDisplay = document.getElementById("downtime-inactive-seconds");
  if (secondsDisplay) {
    secondsDisplay.textContent = `${state.idleSeconds} segundos (Límite: ${state.settings.maxIdleSeconds}s)`;
  }
  
  const commentsEl = document.getElementById("downtime-comments");
  if (commentsEl) commentsEl.value = "";
  
  const modal = document.getElementById("modal-downtime-justification");
  if (modal) {
    modal.classList.add("active");
  }
}

function handleDowntimeSubmit() {
  const reasonSelect = document.getElementById("downtime-reason-select");
  const commentsEl = document.getElementById("downtime-comments");
  if (!reasonSelect || !commentsEl) return;

  const reason = reasonSelect.value;
  const comments = commentsEl.value.trim();
  const duration = state.idleSeconds;
  
  state.downtimeLog.push({
    reason: reason,
    comments: comments || "Sin comentarios",
    durationSeconds: duration,
    durationFormatted: formatSecondsToTime(duration),
    timestamp: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString('es-ES')
  });
  
  const modal = document.getElementById("modal-downtime-justification");
  if (modal) {
    modal.classList.remove("active");
  }
  
  state.idleSeconds = 0;
  showToast("Tiempo muerto justificado con éxito.", "success");
  renderDowntimeRecordsTable();
}

function formatSecondsToTime(totalSeconds) {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderDowntimeRecordsTable() {
  const container = document.getElementById("downtime-records-table-body");
  if (!container) return;
  
  if (state.downtimeLog.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted">No hay registros de tiempo muerto aún.</td>
      </tr>
    `;
    return;
  }
  
  container.innerHTML = "";
  state.downtimeLog.forEach((row, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="font-mono text-bold">#${idx + 1}</td>
      <td class="text-bold text-red">${row.reason}</td>
      <td class="font-mono text-highlight">${row.durationFormatted}</td>
      <td>${row.comments}</td>
      <td>${row.date} ${row.timestamp}</td>
    `;
    container.appendChild(tr);
  });
}

// 10. FUNCIONES JOG DE LA PANTALLA PRINCIPAL
function handleOpJog(axis, direction) {
  if (state.cycleActive) return; // Deshabilitado en ciclo activo
  if (state.emergencyActive) return;
  
  const stepInput = document.getElementById("op-jog-step-val");
  const step = parseFloat(stepInput.value) || 0.5;
  const idx = state.selectedNest;
  
  // Modificar coordenadas de la pieza seleccionada
  state.nestCoordinates[idx][axis] += step * direction;
  if (state.nestCoordinates[idx][axis] < 0) state.nestCoordinates[idx][axis] = 0;
  
  // Actualizar pantalla de información de la pieza
  updateSelectedPieceInfo();
  
  // Mostrar Toast
  const directionStr = direction > 0 ? '+' : '-';
  const axisLabel = axis.toUpperCase();
  const valNow = state.nestCoordinates[idx][axis].toFixed(2);
  const msg = state.currentLanguage === 'es' ? 
    `Eje ${axisLabel}${directionStr} desplazado en ${step}mm. Coordenada actual: ${valNow}mm` : 
    `Axis ${axisLabel}${directionStr} moved by ${step}mm. Current coordinate: ${valNow}mm`;
  
  showToast(msg, 'success');
}

// 11. FUNCIONES DE LOGIN Y AUTENTICACIÓN (SIMULADAS)
function handleLoginSubmit() {
  const selectEl = document.getElementById("login-user-select");
  const empId = selectEl ? selectEl.value : "";
  const passVal = document.getElementById("login-pass").value;
  
  if (!empId) {
    showToast(getTranslation('toast_login_fail'), 'error');
    return;
  }
  
  const matchedUser = state.usersList.find(u => u.empNum === empId && u.status === 'Activo');
  
  if (matchedUser) {
    loginAsUser(matchedUser.empNum);
  } else {
    showToast(getTranslation('toast_login_fail'), 'error');
  }
}

function loginAsUser(empId) {
  const usr = state.usersList.find(u => u.empNum === empId);
  if (!usr) return;
  
  state.currentUser = usr;
  
  // Rellenar meta datos
  document.getElementById("op-user-name").textContent = usr.name;
  
  const roleBadge = document.getElementById("op-user-role-badge");
  if (usr.role === "ADMIN") {
    roleBadge.textContent = getTranslation('role_admin');
    roleBadge.className = "user-role badge-admin";
    // Administrador ve botón alternancia
    document.getElementById("btn-go-to-admin").style.display = "flex";
  } else {
    roleBadge.textContent = getTranslation('role_operator');
    roleBadge.className = "user-role badge-operator";
    // Operador no ve botón alternancia
    document.getElementById("btn-go-to-admin").style.display = "none";
  }
  
  // Ir siempre a pantalla principal HMI primero
  // Reiniciar contadores de sesión
  state.sessionSeconds = 0;
  state.idleSeconds = 0;
  state.hourlyPiecesOK = 0;
  state.hourlyPiecesNOK = 0;
  state.lastHourlyCheckSeconds = 0;
  state.hourlyLog = [];
  state.downtimeLog = [];
  state.emergencyActive = false;
  state.cycleActive = false;
  
  showScreen("screen-operator");
  
  showToast(getTranslation('toast_login_success'), 'success');
  
  const loginSelect = document.getElementById("login-user-select");
  if (loginSelect) loginSelect.selectedIndex = 0;
  document.getElementById("login-pass").value = "";
}

function handleLogout() {
  state.currentUser = null;
  showScreen("screen-login");
  showToast(getTranslation('toast_logout'), 'success');
}

// 12. AJUSTES JOG Y CONFIGURACIÓN MODAL PF1
function openPF1Modal(index) {
  state.editingRecipeIndex = index;
  
  if (index === -1) {
    // Modo inserción (Nueva Receta)
    document.getElementById("pf1-name").value = "";
    document.getElementById("pf1-model").value = "";
    document.getElementById("pf1-program").value = "";
    document.getElementById("pf1-matrix-x").value = "3";
    document.getElementById("pf1-matrix-y").value = "5";
    document.getElementById("pf1-val-x").value = "42.00";
    document.getElementById("pf1-val-y").value = "36.00";
    
    // Cambiar títulos del modal
    document.querySelector("#modal-pf1 .modal-header h2").textContent = state.currentLanguage === 'es' ? "Nueva Receta" : "New Recipe";
    document.querySelector("#modal-pf1 .modal-header p").textContent = state.currentLanguage === 'es' ? "Configurar nuevo producto y matriz" : "Configure new product and matrix";
    
    // Limpiar imagen
    state.editingRecipeImageUrl = "";
    const pf1Preview = document.getElementById("pf1-image-preview");
    const pf1Filename = document.getElementById("pf1-image-filename");
    if (pf1Preview) pf1Preview.innerHTML = "";
    if (pf1Filename) pf1Filename.textContent = "Sin imagen";
  } else {
    // Modo edición
    const recipe = state.programsList[index];
    document.getElementById("pf1-name").value = recipe.name;
    document.getElementById("pf1-model").value = recipe.model;
    document.getElementById("pf1-program").value = recipe.program;
    
    const matrixSplit = recipe.matrix.split('×');
    document.getElementById("pf1-matrix-x").value = matrixSplit[0].trim();
    document.getElementById("pf1-matrix-y").value = matrixSplit[1].trim();
    
    document.getElementById("pf1-val-x").value = recipe.x.toFixed(2);
    document.getElementById("pf1-val-y").value = recipe.y.toFixed(2);
    
    document.querySelector("#modal-pf1 .modal-header h2").textContent = getTranslation('pf1_title');
    document.querySelector("#modal-pf1 .modal-header p").textContent = getTranslation('pf1_subtitle');
    
    // Cargar imagen existente de la receta
    state.editingRecipeImageUrl = recipe.imageUrl || "";
    const pf1Preview = document.getElementById("pf1-image-preview");
    const pf1Filename = document.getElementById("pf1-image-filename");
    if (pf1Preview && recipe.imageUrl) {
      pf1Preview.innerHTML = `<img src="${recipe.imageUrl}" alt="Preview" style="max-height: 60px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">`;
      if (pf1Filename) pf1Filename.textContent = "Imagen cargada";
    } else {
      if (pf1Preview) pf1Preview.innerHTML = "";
      if (pf1Filename) pf1Filename.textContent = "Sin imagen";
    }
  }
  
  updatePF1SummaryPanel();
  
  document.getElementById("modal-backdrop").classList.add("active");
  document.getElementById("modal-pf1").classList.add("active");
}

function adjustJogValue(axis, direction) {
  const valInput = document.getElementById(`pf1-val-${axis}`);
  const stepSelect = document.getElementById(`pf1-step-${axis}`) || document.getElementById('pf1-step-val');
  if (!valInput || !stepSelect) return;
  
  let currentVal = parseFloat(valInput.value);
  const step = parseFloat(stepSelect.value);
  
  currentVal += step * direction;
  if (currentVal < 0) currentVal = 0;
  
  valInput.value = currentVal.toFixed(2);
  updatePF1SummaryPanel();
}

function updatePF1SummaryPanel() {
  document.getElementById("sum-val-prog").textContent = document.getElementById("pf1-program").value || "-";
  
  const mX = document.getElementById("pf1-matrix-x").value;
  const mY = document.getElementById("pf1-matrix-y").value;
  document.getElementById("sum-val-matrix").textContent = `${mX} × ${mY}`;
  
  const valX = parseFloat(document.getElementById("pf1-val-x").value) || 0;
  const valY = parseFloat(document.getElementById("pf1-val-y").value) || 0;
  document.getElementById("sum-val-x").textContent = `${valX.toFixed(2)} mm`;
  document.getElementById("sum-val-y").textContent = `${valY.toFixed(2)} mm`;
  
  if (state.editingRecipeIndex !== -1) {
    const rec = state.programsList[state.editingRecipeIndex];
    document.getElementById("sum-val-modified").textContent = rec.modified;
    document.getElementById("sum-val-user").textContent = rec.user;
  } else {
    document.getElementById("sum-val-modified").textContent = "-";
    document.getElementById("sum-val-user").textContent = state.currentUser ? state.currentUser.name.split(' ')[0] : "Admin";
  }
}

function handleSaveRecipe() {
  const idx = state.editingRecipeIndex;
  
  const name = document.getElementById("pf1-name").value.trim();
  const model = document.getElementById("pf1-model").value.trim();
  const program = document.getElementById("pf1-program").value.trim();
  const mX = document.getElementById("pf1-matrix-x").value;
  const mY = document.getElementById("pf1-matrix-y").value;
  const valX = parseFloat(document.getElementById("pf1-val-x").value) || 0;
  const valY = parseFloat(document.getElementById("pf1-val-y").value) || 0;
  
  const now = new Date();
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute:'2-digit' };
  const formattedNow = now.toLocaleDateString('es-ES', options).replace(',', '');
  
  const newRecipe = {
    name: name || "Sin Nombre",
    model: model || "KSL-NEW",
    program: program || "PXX",
    matrix: `${mX}×${mY}`,
    x: valX,
    y: valY,
    modified: formattedNow,
    user: state.currentUser ? state.currentUser.name.split(' ')[0] : "Admin",
    status: "Activo",
    imageUrl: state.editingRecipeImageUrl || ""
  };
  
  if (idx === -1) {
    state.programsList.push(newRecipe);
    initRecipeSelector();
  } else {
    state.programsList[idx] = newRecipe;
  }
  
  // Re-renderizar grilla si la receta editada es la activa
  if (idx === state.activeRecipeIndex || idx === -1) {
    selectRecipe(state.activeRecipeIndex);
  }
  
  renderProgramsTable();
  closeModals();
  state.editingRecipeImageUrl = "";
  showToast(getTranslation('toast_save_recipe'), 'success');
}

// 13. GESTIÓN DE MODAL USUARIO Y DETALLES
function openNewUserModal() {
  document.getElementById("new-user-form").reset();
  
  const statusToggle = document.getElementById("nu-status-toggle");
  if (statusToggle) {
    statusToggle.checked = true;
    const label = document.getElementById("nu-status-label");
    label.textContent = getTranslation('status_active_txt');
    label.className = "toggle-text text-green";
  }
  
  document.getElementById("modal-backdrop").classList.add("active");
  document.getElementById("modal-new-user").classList.add("active");
}

function handleCreateUser() {
  const name = document.getElementById("nu-name").value.trim();
  const empId = document.getElementById("nu-emp-num").value.trim();
  const username = document.getElementById("nu-username").value.trim().toLowerCase();
  const role = document.getElementById("nu-role").value;
  const pass = document.getElementById("nu-pass").value;
  const passConf = document.getElementById("nu-pass-conf").value;
  const status = document.getElementById("nu-status-toggle").checked ? "Activo" : "Inactivo";
  
  if (pass !== passConf) {
    showToast(getTranslation('toast_pass_mismatch'), 'error');
    return;
  }
  
  state.usersList.push({
    empNum: empId,
    name: name,
    username: username,
    role: role,
    status: status,
    lastAccess: "Sin accesos"
  });
  
  renderUsersTable();
  populateLoginDropdown();
  closeModals();
  showToast(getTranslation('toast_create_user'), 'success');
}

function openUserDetailModal(empId) {
  const usr = state.usersList.find(u => u.empNum === empId);
  if (!usr) return;
  
  document.getElementById("det-name").textContent = usr.name;
  document.getElementById("det-emp-num").textContent = usr.empNum;
  
  const roleEl = document.getElementById("det-role");
  roleEl.textContent = usr.role === "ADMIN" ? getTranslation('role_admin') : getTranslation('role_operator');
  roleEl.className = usr.role === "ADMIN" ? "user-role badge-admin" : "user-role badge-operator";
  
  const statusEl = document.getElementById("det-status");
  statusEl.textContent = usr.status === "Activo" ? getTranslation('status_active_txt') : getTranslation('status_inactive_txt');
  statusEl.className = usr.status === "Activo" ? "badge-status-active" : "badge-status-active text-muted bg-light-gray-soft";
  
  let hash = 0;
  for (let i = 0; i < usr.name.length; i++) hash = usr.name.charCodeAt(i) + ((hash << 5) - hash);
  const seedVal = Math.abs(hash % 100);
  
  const totalShifts = seedVal + 10;
  const produced = totalShifts * 320;
  const nok = Math.floor(produced * (0.01 + (seedVal % 15) / 1000));
  const ok = produced - nok;
  const quality = ((ok / produced) * 100).toFixed(1) + "%";
  
  document.getElementById("det-total-shifts").textContent = totalShifts;
  document.getElementById("det-total-prod").textContent = produced.toLocaleString();
  document.getElementById("det-ok").textContent = ok.toLocaleString();
  document.getElementById("det-nok").textContent = nok.toLocaleString();
  document.getElementById("det-quality").textContent = quality;
  
  const avgSec = 3 + (seedVal % 4);
  const avgMin = 10 + (seedVal % 45);
  document.getElementById("det-avg-delta").textContent = `00:${avgSec.toString().padStart(2, '0')}:${avgMin.toString().padStart(2, '0')}`;
  
  document.getElementById("modal-backdrop").classList.add("active");
  document.getElementById("modal-user-detail").classList.add("active");
}

function closeModals() {
  document.getElementById("modal-backdrop").classList.remove("active");
  document.querySelectorAll(".modal-content-card").forEach(m => m.classList.remove("active"));
  state.editingRecipeIndex = -1;
}

// 14. NAVEGACIÓN Y ENCABEZADOS ADMIN
function updateAdminHeader(tabId) {
  const titleEl = document.getElementById("admin-page-title");
  const subtitleEl = document.getElementById("admin-page-subtitle");
  
  if (tabId === "tab-programs") {
    titleEl.textContent = getTranslation('admin_programs_title');
    subtitleEl.textContent = getTranslation('admin_programs_subtitle');
  } else if (tabId === "tab-stats") {
    titleEl.textContent = getTranslation('admin_stats_title');
    subtitleEl.textContent = getTranslation('admin_stats_subtitle');
  } else if (tabId === "tab-users") {
    titleEl.textContent = getTranslation('admin_users_title');
    subtitleEl.textContent = getTranslation('admin_users_subtitle');
  } else if (tabId === "tab-settings") {
    titleEl.textContent = getTranslation('admin_settings_title');
    subtitleEl.textContent = getTranslation('admin_settings_subtitle');
  }
}

// 15. EXPORTAR HISTÓRICOS A CSV EXCEL
function handleExportStats() {
  let csvContent = "data:text/csv;charset=utf-8,";
  
  const headers = state.currentLanguage === 'es' ? 
    "Fecha,Usuario,Inicio Sesion,1a Secuencia,Delta Login-1a Sec,Modelo,Programa,Total,OK,NOK,% Calidad,Fin Sesion,Duracion Jornada" : 
    "Date,User,Login Time,1st Sequence,Delta Login-1st Seq,Model,Program,Total,OK,NOK,% Quality,Logout Time,Shift Duration";
  
  csvContent += headers + "\n";
  
  state.statsList.forEach(row => {
    const line = [
      row.date,
      `"${row.user}"`,
      row.login,
      row.firstSeq,
      row.delta,
      row.model,
      row.program,
      row.total,
      row.ok,
      row.nok,
      row.quality,
      row.logout,
      row.duration
    ].join(",");
    csvContent += line + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Reporte_Produccion_KOSTAL_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  
  link.click();
  document.body.removeChild(link);
  
  showToast(state.currentLanguage === 'es' ? "Reporte descargado correctamente." : "Report downloaded successfully.", 'success');
}

// 16. SISTEMA DE TRADUCCIÓN DE IDIOMAS (ES / EN)
function setLanguage(lang) {
  state.currentLanguage = lang;
  
  document.querySelectorAll(".btn-lang, .btn-lang-admin").forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  translateUI();
  
  renderProgramsTable();
  renderUsersTable();
  updateSelectedPieceInfo();
  
  const activeTab = document.querySelector(".admin-tab.active");
  if (activeTab) {
    updateAdminHeader(activeTab.id);
  }
  
  showToast(lang === 'es' ? "Idioma cambiado a Español." : "Language switched to English.", 'success');
}

function translateUI() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const trans = getTranslation(key);
    
    const iconChild = el.querySelector("i, span:not([data-i18n])");
    if (iconChild) {
      const textSpan = el.querySelector("span");
      if (textSpan) {
        textSpan.textContent = trans;
      } else {
        el.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = trans;
          }
        });
      }
    } else {
      el.textContent = trans;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = getTranslation(key);
  });
}

function getTranslation(key) {
  return translations[state.currentLanguage][key] || translations['es'][key] || key;
}

// 17. SISTEMA DE TOAST NOTIFICATION FLOTANTE
function showToast(message, type = 'info') {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconName = 'info';
  if (type === 'success') iconName = 'check-circle-2';
  if (type === 'error') iconName = 'alert-triangle';
  if (type === 'warning') iconName = 'alert-circle';
  
  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <div class="toast-content">${message}</div>
  `;
  
  container.appendChild(toast);
  
  lucide.createIcons({
    attrs: {
      class: 'toast-icon'
    },
    nameAttr: 'data-lucide',
    icons: undefined
  });

  setTimeout(() => {
    toast.style.animation = "none";
    toast.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    
    setTimeout(() => {
      if (toast.parentNode === container) {
        container.removeChild(toast);
      }
    }, 400);
  }, 3500);
}

// ==========================================================================
// 18. NUEVAS FUNCIONES: LOGIN DROPDOWN, DELETE RECIPE, FILTER, FILE PICKER
// ==========================================================================

function populateLoginDropdown() {
  const selectEl = document.getElementById("login-user-select");
  if (!selectEl) return;
  
  const currentVal = selectEl.value;
  selectEl.innerHTML = '<option value="" disabled selected>Seleccione un usuario...</option>';
  
  state.usersList.forEach(usr => {
    if (usr.status === "Activo") {
      const option = document.createElement("option");
      option.value = usr.empNum;
      option.textContent = `${usr.name} (${usr.username})`;
      selectEl.appendChild(option);
    }
  });
  
  if (currentVal) {
    const exists = Array.from(selectEl.options).some(o => o.value === currentVal);
    if (exists) selectEl.value = currentVal;
  }
}

function handleDeleteRecipe(index) {
  if (state.programsList.length <= 1) {
    showToast(state.currentLanguage === 'es' ? "Debe haber al menos una receta." : "At least one recipe is required.", "error");
    return;
  }
  
  const recipe = state.programsList[index];
  if (!recipe) return;
  
  const confirmMsg = state.currentLanguage === 'es' ?
    `¿Está seguro de que desea eliminar la receta "${recipe.name}" (${recipe.model})?` :
    `Are you sure you want to delete recipe "${recipe.name}" (${recipe.model})?`;
  
  if (confirm(confirmMsg)) {
    if (state.activeRecipeIndex === index) {
      state.activeRecipeIndex = 0;
    } else if (state.activeRecipeIndex > index) {
      state.activeRecipeIndex--;
    }
    
    state.programsList.splice(index, 1);
    initRecipeSelector();
    selectRecipe(state.activeRecipeIndex);
    renderProgramsTable();
    showToast(state.currentLanguage === 'es' ? "Receta eliminada correctamente." : "Recipe deleted successfully.", "success");
  }
}

function handleFilterStats() {
  const dateFromInput = document.getElementById("filter-date-from");
  const dateToInput = document.getElementById("filter-date-to");
  const userSelect = document.getElementById("filter-user");
  const modelSelect = document.getElementById("filter-model");
  const shiftSelect = document.getElementById("filter-shift");
  
  const dateFrom = dateFromInput ? dateFromInput.value : "";
  const dateTo = dateToInput ? dateToInput.value : "";
  const userFilter = userSelect ? userSelect.value : "all";
  const modelFilter = modelSelect ? modelSelect.value : "all";
  const shiftFilter = shiftSelect ? shiftSelect.value : "all";
  
  function parseDate(dateStr) {
    const parts = dateStr.split('/');
    if (parts.length !== 3) return null;
    return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
  }
  
  function getShift(loginTime) {
    const hour = parseInt(loginTime.split(':')[0]);
    if (hour >= 6 && hour < 14) return "1";
    if (hour >= 14 && hour < 22) return "2";
    return "3";
  }
  
  let filtered = state.statsList.filter(row => {
    if (dateFrom) {
      const rowDate = parseDate(row.date);
      const fromDate = new Date(dateFrom);
      if (rowDate && rowDate < fromDate) return false;
    }
    if (dateTo) {
      const rowDate = parseDate(row.date);
      const toDate = new Date(dateTo);
      toDate.setHours(23, 59, 59);
      if (rowDate && rowDate > toDate) return false;
    }
    if (userFilter !== "all") {
      if (!row.user.toLowerCase().includes(userFilter.toLowerCase())) return false;
    }
    if (modelFilter !== "all") {
      if (row.model !== modelFilter) return false;
    }
    if (shiftFilter !== "all") {
      if (getShift(row.login) !== shiftFilter) return false;
    }
    return true;
  });
  
  renderFilteredStatsTable(filtered);
  
  const totalProduced = filtered.reduce((sum, r) => sum + r.total, 0);
  const totalOK = filtered.reduce((sum, r) => sum + r.ok, 0);
  const totalNOK = filtered.reduce((sum, r) => sum + r.nok, 0);
  
  const kpiTotal = document.getElementById("stats-kpi-total");
  const kpiOK = document.getElementById("stats-kpi-ok");
  const kpiNOK = document.getElementById("stats-kpi-nok");
  if (kpiTotal) kpiTotal.textContent = totalProduced.toLocaleString();
  if (kpiOK) kpiOK.textContent = totalOK.toLocaleString();
  if (kpiNOK) kpiNOK.textContent = totalNOK.toLocaleString();
  
  showToast(state.currentLanguage === 'es' ?
    `Filtro aplicado: ${filtered.length} registros encontrados.` :
    `Filter applied: ${filtered.length} records found.`, "success");
}

function renderFilteredStatsTable(data) {
  const tbody = document.getElementById("stats-table-body");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="13" class="text-center text-muted">${state.currentLanguage === 'es' ? 'No se encontraron registros con los filtros seleccionados.' : 'No records found with selected filters.'}</td></tr>`;
    return;
  }
  
  data.forEach(row => {
    const tr = document.createElement("tr");
    const valQual = parseFloat(row.quality);
    const qualClass = valQual < 98.0 ? "text-red" : "text-green";
    
    tr.innerHTML = `
      <td class="font-mono">${row.date}</td>
      <td class="text-bold">${row.user}</td>
      <td class="font-mono">${row.login}</td>
      <td class="font-mono">${row.firstSeq}</td>
      <td class="font-mono text-purple">${row.delta}</td>
      <td class="font-mono">${row.model}</td>
      <td class="font-mono text-highlight">${row.program}</td>
      <td class="font-mono text-bold">${row.total}</td>
      <td class="font-mono text-green">${row.ok}</td>
      <td class="font-mono text-red">${row.nok}</td>
      <td class="font-mono ${qualClass} text-bold">${row.quality}</td>
      <td class="font-mono">${row.logout}</td>
      <td class="font-mono text-bold">${row.duration}</td>
    `;
    tbody.appendChild(tr);
  });
}

function handleRecipeImageSelect(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const filenameEl = document.getElementById("pf1-image-filename");
  const previewEl = document.getElementById("pf1-image-preview");
  
  if (filenameEl) filenameEl.textContent = file.name;
  
  const reader = new FileReader();
  reader.onload = function(event) {
    state.editingRecipeImageUrl = event.target.result;
    
    if (previewEl) {
      previewEl.innerHTML = `<img src="${event.target.result}" alt="Preview" style="max-height: 60px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">`;
    }
    
    showToast(state.currentLanguage === 'es' ? "Imagen cargada. Guarde la receta para aplicar." : "Image loaded. Save recipe to apply.", "success");
  };
  reader.readAsDataURL(file);
}


