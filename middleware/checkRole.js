// middleware/checkRole.js

module.exports = function(allowedRoles) {
    return function(req, res, next) {
      // Log to see if middleware is invoked and role is checked
      console.log("User role:", req.user ? req.user.role : "No user");
      
      if (!req.user || !allowedRoles.includes(req.user.role)) {
        console.log("Access denied: insufficient privileges");
        return res.status(403).json({ msg: 'Access denied: insufficient privileges' });
      }
  
      // If the user's role matches one of the allowed roles, proceed
      console.log("Access granted");
      next();
    };
  };
  