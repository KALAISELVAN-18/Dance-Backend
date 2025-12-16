# Backend Deployment Guide

## Steps to Deploy Updated Backend to Render

### 1. Create Initial Admin User
Before deploying, run the seed script locally to understand the process:
```bash
cd C:\Users\kalai\Downloads\dance_backend
node seedAdmin.js
```

### 2. Deploy to Render
You need to push your updated backend code to your Git repository and redeploy on Render.

#### If using Git:
```bash
cd C:\Users\kalai\Downloads\dance_backend
git add .
git commit -m "Add secure role-based authentication system"
git push origin main
```

#### Then on Render:
1. Go to your Render dashboard
2. Find your backend service
3. Click "Manual Deploy" or wait for auto-deploy if connected to Git

### 3. Create Admin User on Production
After deployment, you need to create the admin user on production. You can either:

#### Option A: Add environment variables on Render
1. Go to your service settings on Render
2. Add these environment variables:
   - `ADMIN_EMAIL`: admin@danceacademy.com
   - `ADMIN_PASSWORD`: Admin@123

#### Option B: Run seed script on production
Connect to your Render service and run the seed script.

### 4. Test the New Endpoints
After deployment, test these new endpoints:
- `POST /api/auth/admin-login` - Admin login
- `GET /api/auth/users` - Get all users (admin only)
- `PUT /api/auth/users/:userId/role` - Update user role (admin only)

### 5. Updated Route Protection
The following routes now require admin privileges:
- `POST /api/classes` - Create class
- `DELETE /api/classes/:id` - Delete class
- `GET /api/registrations` - Get registrations
- `DELETE /api/registrations/:id` - Delete registration
- `POST /api/instructors` - Create instructor
- `PUT /api/instructors/:id` - Update instructor
- `DELETE /api/instructors/:id` - Delete instructor

## Default Admin Credentials
- **Email**: admin@danceacademy.com
- **Password**: Admin@123

**Important**: Change these credentials after first login for security.