package com.margelo.nitro.incar
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class Incar : HybridIncarSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
