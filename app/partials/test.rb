class InteracitveProgramme

  def self.start
    input = gets.chomp
    while !(/^q$/i).match(input)
      eval input
      input = gets.chomp
    end
  end
  
end


InteracitveProgramme.start
