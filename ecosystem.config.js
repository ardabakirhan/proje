// PM2 Production Configuration
module.exports = {
  apps: [{
    name: 'iletisim-group-backend',
    script: 'server.js',
    cwd: '/var/www/iletisim-group/backend',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
      FRONTEND_URL: 'https://iletisimgroup.com',
      EMAIL_HOST: 'mail.iletisimgroup.com',
      EMAIL_PORT: 465,
      EMAIL_SECURE: 'true',
      EMAIL_USER: 'info@iletisimgroup.com',
      EMAIL_PASS: 'a20250618A',
      EMAIL_FROM: 'info@iletisimgroup.com',
      EMAIL_TO: 'info@iletisimgroup.com',
      COMPANY_NAME: 'İletişim Group',
      COMPANY_WEBSITE: 'https://iletisimgroup.com',
      MONGODB_URI: 'mongodb+srv://ardayasar92:a20250618A@iletisimgroup.ldyjp.mongodb.net/iletisimgroup?retryWrites=true&w=majority&appName=iletisimgroup'
    },
    error_file: '/var/log/pm2/iletisim-group-error.log',
    out_file: '/var/log/pm2/iletisim-group-out.log',
    log_file: '/var/log/pm2/iletisim-group.log',
    time: true,
    watch: false,
    max_memory_restart: '500M',
    restart_delay: 4000,
    max_restarts: 10,
    min_uptime: '30s'
  }]
};
