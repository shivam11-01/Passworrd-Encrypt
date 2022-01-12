const bcrypt = require('bcryptjs')
async function encrypt(){
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash('Password@123',salt)
    console.log(hashedpassword)
}
encrypt()